import Dispatcher from '../dispatcher';
import Constants from '../contants';
import Users from './Users';
import { Notifier } from '../stores';

Notifier.dispatchToken = Dispatcher.register((evt) => {
    switch(evt.action.actionType){
        case Constants.Users.LOGIN:
            Users.Login(evt.action.data);
            break;
        default:
            console.log("Home");
    }
});

export default Notifier;
