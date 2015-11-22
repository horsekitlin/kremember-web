import 'babel/polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes';
import attachFastClick from 'fastclick';

window.React = React;

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

attachFastClick.attach(document.body);

const history = createHashHistory({
    queryKey: false
});

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('container'));
