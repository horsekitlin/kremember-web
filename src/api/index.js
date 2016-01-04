import Dispatcher from '../dispatcher';
import Constants from '../constants';
import Fans from './Fans';
import { Notifier } from '../stores';

Notifier.dispatchToken = Dispatcher.register((evt) => {
    switch(evt.action.actionType){
        case Constants.POSTS_GET_LIST:
            console.log('post');
            break;
        case Constants.FANS_GET_LIST:
            Fans.List(evt.action.data);
            break;
        default:
            console.log("Home");
    }
});

export default Notifier;
