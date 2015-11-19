import { Router, Route } from 'react-router';

import App from './components/App';
import Login from './pages/login.js';

export default class Root extends React.Component{
    constructor(props){
        super(props);
        this.propTypes = {
//            history :React.PropTypes.Object.isRequired
        };

    }
    render(){
        const { history } = this.props;
        return (
            <Router history={history}>
                <Route name='app' path='/' component={App}>
                <Route name='login' path='/login/' component={Login} />
                </Route>
            </Router>
        );
    }
}
