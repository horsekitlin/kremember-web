import config from '../../config';
import { redirect } from '../utils/group';
import { fetch_to, format_headers } from '../utils/requests';
import { Notifier, Store_Posts } from '../stores';

class PostsBase extends Object {
    constructor(){
        super();
    }
    List(data){
        fetch_to('/api/posts/list/', data)
        .then((res) => {
            Store_Posts.update('list', res.content);
            Store_Posts.update('query', data);
            Notifier.brocase('postschange');
        }).catch((err) => {
            console.log(err);
        });
    }
}

var PostsManager = new PostsBase();

export default PostsManager;
