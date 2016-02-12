import PageBase from '../utils/PageBase';
import Stores from '../stores';
import Actions from '../actions';
import { Navbar, Post } from '../components';

export default class Posts extends PageBase {
    constructor(props){
        super(props);
        this.state = {
            post : Stores.Member.detail(),
        };
    }
    render(){
        const post = this.state.post;
        return (
            <section>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <div className="col-xs-6 col-md-6 col-lg-6">
                    </div>
                    <div className="col-xs-6 col-md-6 col-lg-6">
                        <a href={`http://facebook.com.tw/`}>{post.form}</a>
                    </div>
                </div>
            </section>
        );
    }
}

