import { Route } from 'react-router';
import App from './components/App';

import Home from './pages/home';

const routes = (
  <Route component={App}>
    <Route path="/" component={Home} />
     // put other routes here
  </Route>
);

export default routes;
