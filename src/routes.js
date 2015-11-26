import App from './components/App';
import { Route } from 'react-router';

import DefaultLayout from './components/Layout';
import { Login, Home, Notification } from './pages';

const routes = (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route component={DefaultLayout}>
        <Route path='/home' component={Home} />
        <Route path='/notification' component={Notification}/>
    </Route>
  </Route>
);

export default routes;
