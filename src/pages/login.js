import PageBase from '../utils/PageBase';
import websetting from '../../config';
import Stores from '../stores';
import Actions from '../actions';
import FacebookLogin from '../components/facebook';
import { redirect } from '../utils/group';

export default class Login extends PageBase {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }
    login(e){
        Actions.Users.Login({
            account : this.refs.account.value,
            pwd : this.refs.pwd.value
        });
        e.preventDefault();
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
                    <form onSubmit={this.login} method='POST'>
                        <legend>Login</legend>
                        <fieldset>
                            <div className="col-xs-12 col-md-12 col-lg-12 center-block">
                                <div className="col-xs-12 col-md-8 col-lg-4 col-lg-offset-4">
                                    <div className="form-group">
                                        <label >帳號</label>
                                        <input className='form-control' ref='account' id='account' name='account' required={true}/>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-8 col-lg-4 col-lg-offset-4">
                                    <div className="form-group">
                                        <label >密碼</label>
                                        <input className='form-control' type='password' ref='pwd' required={true} id='pwd' name='pwd'/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-12 col-lg-12">
                                <input className='btn btn-primary btn-sm' type="submit" value='登入'/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

