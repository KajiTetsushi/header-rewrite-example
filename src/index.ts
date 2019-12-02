import path from 'path';
import express, { RequestHandler } from 'express';
import staticify from '@andrewsantarin/staticify';
import morgan from 'morgan';

import { dev, env, port, url } from './env';
import posts from './posts.json';

const DEV = dev()
const ENV = env();
const PORT = port();
const URL = url(PORT);

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

const renderIndex: RequestHandler = (req, res) => res.render('index');;
const getPosts: RequestHandler = (req, res) => res.json(posts);

app.get('/', renderIndex);
app.get('/posts', getPosts);

const server = app.listen(PORT);
server.on('listening', () => {
  console.log('');
  console.log('-----------------------');
  console.log(`Server evironment mode: ${ENV}`)
  console.log(`Server is now running on ${URL}`);
  console.log('-----------------------');
  console.log('');
});
