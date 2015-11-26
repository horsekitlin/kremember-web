import App from './components/App';
import { Route } from 'react-router';

import DefaultLayout from './components/Layout';
import { CreateAdvert, Login, Home, Notification
    , Advert, SysPost } from './pages';

const routes = (
  <Route component={App}>
    <Route path='/' component={Login} />
    <Route component={DefaultLayout}>
        <Route path='/home' component={Home} />
        <Route path='/notification' component={Notification}/>
        <Route path='/advert' component={Advert}/>
        <Route path='/syspost' component={SysPost}/>
        <Route path='/createadvert' component={CreateAdvert}/>
    </Route>
  </Route>
);

export default routes;
