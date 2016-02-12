import PageBase from '../utils/PageBase';
import Stores from '../stores';
import Actions from '../actions';
import { Navbar, Post } from '../components';

export default class Posts extends PageBase {
    constructor(props){
        super(props);
        var posts = Stores.Member.listAll();
        this.state = {
            posts : posts,
        };
    }
    render(){
        return (
            <div className='row'>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
                <div className="col-xs-3 col-md-3 col-lg-3">
                    {this.state.posts.map((post, index) => {
                        return (<div key={'post' + index}>
                            <Post post = {post}/>
                        </div>);
                    })}
                </div>
                <div className="col-xs-9 col-md-9 col-lg-9">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

