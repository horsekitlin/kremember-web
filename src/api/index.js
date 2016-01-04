import Dispatcher from '../dispatcher';
import Constants from '../constants';
import Fans from './Fans';
import Posts from './Posts';
import { Notifier } from '../stores';

Notifier.dispatchToken = Dispatcher.register((evt) => {
    switch(evt.action.actionType){
        case Constants.POSTS_NEXT_PAGE:
            Posts.Nextpage(evt.action.data);
            break;
        case Constants.POSTS_GET_LIST:
            Posts.List(evt.action.data);
            break;
        case Constants.FANS_GET_LIST:
            Fans.List(evt.action.data);
            break;
        default:
            console.log("Home");
    }
});

export default Notifier;
