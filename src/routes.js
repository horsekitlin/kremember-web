import App from './components/App';
import { Route } from 'react-router';

import DefaultLayout from './components/Layout';
import { Login, Home } from './pages';

const routes = (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route component={DefaultLayout}>
        <Route path='/home' component={Home} />
    </Route>
     // put other routes here
  </Route>
);

export default routes;
