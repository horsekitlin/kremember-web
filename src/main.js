require("bootstrap-webpack");
import ReactDOM from 'react-dom';
import Router from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import routes from './routes';

window.React = React;

const history = createHashHistory({
    queryKey: false
});

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('container'));
