import PageBase from '../utils/PageBase';
import FBPost from '../components/FBPost';
import FansList from '../components/Fans_list';
import { Store_Posts } from '../stores';
import { Act_Posts } from '../actions';

const styles = {
    block : {
        padding : "25px",
        "margin" : "0 0 0 0",
        border : "1px solid #CCC"
    },
};
export default class Facebook extends PageBase {
    constructor(props){
        super(props);
        this._reloadCompent = this._reloadCompent.bind(this);
        this._evts= [{
            name : 'postschange',
            method : this._reloadCompent
        }];
        this.state = {
            query : Store_Posts.get('query'),
            posts : []
        };
        Act_Posts.List(this.state.query);
    }
    loadpage(){
        let query = Store_Posts.get('query');
        query.skip += query.limit;
        Act_Posts.Nextpage(query);
    }
    _reloadCompent (){
        this.setState({
            query : Store_Posts.get('query'),
            posts : Store_Posts.listAll()
        });
    }
    render(){
        return (
            <div className="row">
                <div className="col-lg-8 col-md-8 col-xs-8">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12" style={styles.block}>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-default">近況更新</button>
                                <button type="button" className="btn btn-default">新增照片</button>
                            </div>
                            <textarea id="" name="" rows="5" className="form-control" placeholder='在想些什麼?'></textarea>
                            <div className="pull-right"><button className='btn btn-primary btn-sm'>發布</button></div>
                        </div>
                        <hr />
                        {this.state.posts.map((post) => {
                            return <FBPost post={post}/>;
                        })}
                        <hr />
                        <div className="col-lg-12 col-md-12 col-xs-12">
                            <div className="help-block text-center">
                                <label
                                    onClick={this.loadpage}
                                    className='btn btn-sm btn-default'>下一頁</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-4">
                    <FansList />
                </div>
            </div>
        );
    }
}

