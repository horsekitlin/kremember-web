import App from './components/App';
import { Route } from 'react-router';

import { Hello } from './pages';

const routes = (
    <Route component={App}>
        <Route path='/' component={Hello}>
        </Route>
    </Route>
);

export default routes;
