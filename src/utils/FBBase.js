import websetting from '../../config';

class FBBase extends Object {
    constructor(){
        super();
    }
    init(){
        window.fbAsyncInit = function() {
            FB.init({
                appId      : websetting.facebook.appId,
                xfbml      : false,
                version    : 'v2.5'
            });
        };
    }
}

var FBManager = new FBBase();

export default FBManager;
