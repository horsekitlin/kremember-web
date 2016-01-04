import Base from '../utils/StoreBase';

class PostsBase extends Base {
    constructor(name){
        super(name);
        this.query = {
            skip : 0,
            message : '',
            fans_id : [],
            limit : 10
        }
    }
}

var PostsManager = new PostsBase('posts');

export default PostsManager;
