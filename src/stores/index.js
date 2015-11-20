import events from 'events';
import Users from './Users';
import Member from './Member';

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
    Users : Users,
    Member : Member
};
