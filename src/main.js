import 'babel/polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes';
import attachFastClick from 'fastclick';

attachFastClick.attach(document.body);

const history = createHashHistory();

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('container'));
