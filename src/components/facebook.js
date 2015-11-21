
require('../css/style.css');

export default class Facebook extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.checkLoginState = this.checkLoginState.bind(this);
        this.responseApi = this.responseApi.bind(this);
    }
    handleClick() {
      var valueScope = this.props.scope || 'public_profile, email, user_birthday';
      FB.login(this.checkLoginState, { scope: valueScope });
    }
    checkLoginState(response){
        if (response.authResponse) {
            this.responseApi(response.authResponse);
        } else {
            if ( this.props.loginHandler ) {
                this.props.loginHandler( { status: response.status } );
            }
        }
    }
    responseApi(authResponse){
      FB.api('/me', function(response) {
        response.status = 'connected';
        response.accessToken = authResponse.accessToken;
        response.expiresIn = authResponse.expiresIn;
        response.signedRequest = authResponse.signedRequest;
        if ( this.props.loginHandler ) {
          this.props.loginHandler( response );
        }
      }.bind(this));
    }
    componentDidMount(){
        window.fbAsyncInit = function() {
            FB.init({
                appId      : this.props.appId || '',
                xfbml      : this.props.xfbml || false,
                version    : 'v2.5'
            });
            if ( this.props.autoLoad ) {
                FB.getLoginStatus(function(response) {
                    this.checkLoginState(response);
                }.bind(this));
            }
        }.bind(this);
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/pt_BR/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    render(){
      return (
        <div>
          <button className={ this.props.class ? this.props.class : 'facebook-login'} onClick={ this.handleClick }>
              { this.props.callToAction ? this.props.callToAction : "Login with Facebook"}
          </button>
          <div id="fb-root"></div>
        </div>
      );
    }
}
