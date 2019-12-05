import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Posts } from './Posts';
import { Landing } from './Landing';
import { Cats } from './Cats';
import { Example } from './Example';
import { Me } from './Me';

export type AppProps = {
  baseURL?: string;
};

export const App: React.FunctionComponent<AppProps> = (props) => {
  const { baseURL = '/' } = props;

  return (
    <Router basename={baseURL}>
      <Route exact path="/" component={Landing} />
      <Route exact path="/cats" component={Cats} />
      <Route exact path="/example" component={Example} />
      <Route exact path="/me" component={Me} />
      <Posts />
    </Router>
  );
};
