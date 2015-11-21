import PageBase from '../utils/PageBase';
import websetting from '../../config';
import Stores from '../stores';
import Actions from '../actions';
import FacebookLogin from '../components/facebook';

export default class Login extends PageBase {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(1);
    }
    resultFacebookLogin(resp){
        console(resp);
    }
    render(){
                console.log(websetting.facebook.appId);
        return (
            <div className='row'>
                <div className="col-xs-12 col-md-12 col-lg-12">
                hello
                    <FacebookLogin
                        appId = "519826671522565"
                        class = "facebook-login"
                        scope = "public_profile, email, user_birthday"
                        loginHandler = { this.resultFacebookLogin } />
                </div>
            </div>
        );
    }
}

