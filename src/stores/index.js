import events from 'events';
import Fans from './Fans';
import Posts from './Posts';

class EventEmitter extends events.EventEmitter{
    constructor(){
        super();
    }
    brocase(name){
        this.emit(name);
    }
    reloadpage(){
        this.emit('ReloadPage');
    }
    loadingpage(){
        this.emit('LoadingPage');
    }
}

var Notifier = new EventEmitter();

export default {
    Notifier : Notifier,
    Store_Fans : Fans,
    Store_Posts : Posts,
};
