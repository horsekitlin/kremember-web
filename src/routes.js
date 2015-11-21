import App from './components/App';
import { Route } from 'react-router';

import { Home, Createmember, Login } from './pages';

const routes = (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route path='/createmember' component={Createmember} />
    <Route path='/posts' component={Home} />
     // put other routes here
  </Route>
);

export default routes;
