import App from './components/App';
import { Route } from 'react-router';

import { Posts, Createmember, Login, Post } from './pages';

const routes = (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route path='/createmember' component={Createmember} />
    <Route path='/posts' component={Posts}>
        <Route path='/post/:pid' component = {Post} />
    </Route>
     // put other routes here
  </Route>
);

export default routes;
