import PageBase from '../utils/PageBase';
import Stores from '../stores';
import Actions from '../actions';
import { Navbar, Post } from '../components';

export default class Home extends PageBase {
    constructor(props){
        super(props);
        this.state = {
            posts : [],
        };
    }
    render(){
        return (
            <div className='row'>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    <Navbar />
                </div>
                <div className="col-xs-12 col-md-12 col-lg-12">
                    {this.state.posts.map((post, index) => {
                        return (<div key={'post' + index}>
                            <Post post = {post}/>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

