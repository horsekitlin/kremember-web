import constants from '../contants';
import Flux from 'flux';

class Dispatcher extends Flux.Dispatcher {
    constructor(){
        super();
    }
    handleUsersAction(action){
        var payload = {
            source: 'Member',
            action: action
        };
        this.dispatch(payload);
    }
    handleMemberAction(action){
        var payload = {
            source: 'Member',
            action: action
        };
        this.dispatch(payload);
    }
    handleViewsAction(action){
        var payload = {
            source: 'Views',
            action: action
        };
        this.dispatch(payload);
    }
}
var AppDispatcher = new Dispatcher();

export default AppDispatcher;

