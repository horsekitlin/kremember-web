import App from './components/App';
import { Route } from 'react-router';

import { Facebook } from './pages';

const routes = (
    <Route path='/' component={App}>
        <Route path='/facebook' component={Facebook}>
        </Route>
    </Route>
);

export default routes;
