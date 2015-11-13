require('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../scss/main.scss');
import PageBase from '../utils/PageBase';
import websetting from '../../config';
import { Facebook } from '../components';
import { Users } from '../actions';

class Login extends PageBase {
    constructor(props){
        super(props);
    }
    login(resp){
        Users.Login(resp);
    }
    render(){
        return (
            <div className='text-center'>
                <Facebook
                    loginHandler = {this.login}
                    appId = {websetting.facebook.appId}
                    scope = {websetting.facebook.scope}/>
            </div>
        );
    }
}

ReactDOM.render(<Login />, document.getElementById('container'));
