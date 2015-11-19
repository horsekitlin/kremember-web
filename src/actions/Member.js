import Dispatcher from '../dispatcher';
import Constants from '../contants';

export default {
    Create : (data) => {
        Dispatcher.handleMemberAction({
            actionType : Constants.Member.CREATED,
            data : data
        });
    },
    List : () => {
        Dispatcher.handleMemberAction({
            actionType : Constants.Member.LIST,
        });
    }
};
