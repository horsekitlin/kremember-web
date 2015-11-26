import Dispatcher from '../dispatcher';
import Constants from '../contants';

export default {
    Login : (data, callback) => {
        Dispatcher.handleUsersAction({
            actionType : Constants.Users.LOGIN,
            data : data,
        });
    }
};
