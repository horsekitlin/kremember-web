import Dispatcher from '../dispatcher';
import Constants from '../constants';

export default {
    List : (data) => {
        Dispatcher.handlePostsAction({
            actionType : Constants.POSTS_GET_LIST,
            data : data
        });
    },
    Nextpage(data){
        Dispatcher.handlePostsAction({
            actionType : Constants.POSTS_NEXT_PAGE,
            data : data
        });
    }
};
