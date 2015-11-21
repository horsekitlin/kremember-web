import { Route } from 'react-router';
import App from './components/App';

import Home from './pages/home';
import Createmember from './pages/createmember';

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/createmember' component={Createmember} />
     // put other routes here
  </Route>
);

export default routes;
