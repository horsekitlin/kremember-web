import PageBase from '../utils/PageBase';
import websetting from '../../config';
import Stores from '../stores';
import Actions from '../actions';
import FacebookLogin from '../components/facebook';
import { redirect } from '../utils/group';

export default class Login extends PageBase {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const user = Stores.Users.detail();
        if(!_.isUndefined(user.token)){
            redirect('/posts');
        }
    }
    resultFacebookLogin(resp){
        Actions.Users.Login(resp);
    }
    render(){
        return (
            <div className='row'>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <a href="#" className="thumbnail">
                        <img src={require('../images/logo.png')} alt="Logo" />
                    </a>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12 text-center">
                    <FacebookLogin
                        appId = { websetting.facebook.appId }
                        class = "facebook-login"
                        scope = { websetting.facebook.scope }
                        loginHandler = { this.resultFacebookLogin } />
                </div>
            </div>
        );
    }
}

