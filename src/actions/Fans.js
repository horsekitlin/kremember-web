import Dispatcher from '../dispatcher';
import Constants from '../constants';

export default {
    List : (data) => {
        Dispatcher.handleFansAction({
            actionType : Constants.FANS_GET_LIST,
            data : data
        });
    }
};
