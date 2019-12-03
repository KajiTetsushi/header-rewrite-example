import path from 'path';
import express, { RequestHandler } from 'express';
import staticify from '@andrewsantarin/staticify';
import morgan from 'morgan';

import { dev, env, port, url, baseUrl } from './env';
import posts from './posts.json';

const DEV = dev()
const ENV = env();
const PORT = port();
const URL = url(PORT);
const BASE_URL = baseUrl();

const app = express();

app.set('views', path.join(__dirname, '..', 'dist', 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));

const staticified = staticify(path.join(__dirname, '..', 'dist', 'public'), { pathPrefix: '/static' });

app.use((req, res, next) => {
  if (DEV) staticified.refresh();
  next();
});

app.use('/static', staticified.middleware);
app.locals = { staticPath: staticified.getVersionedPath };

const logUrls = (requestHandler: RequestHandler): RequestHandler => (req, res, next) => {
  const {
    originalUrl,
    baseUrl,
    url,
    path,
  } = req;
  console.log(JSON.stringify({
    originalUrl,
    baseUrl,
    url,
    path,
  }, null, 2));

  return requestHandler(req, res, next);
}

const renderIndex: RequestHandler = logUrls((req, res) => res.render('index'));
const getPosts: RequestHandler = logUrls((req, res) => res.json(posts));

app.get('/', renderIndex);
app.get('/posts', getPosts);

const context = express();
context.use(BASE_URL, app);

const server = context.listen(PORT);
server.on('listening', () => {
  console.log('');
  console.log('-----------------------');
  console.log(`Server evironment mode: ${ENV}`)
  console.log(`Server is now running on ${URL}`);
  console.log('-----------------------');
  console.log('');
});
