import moment from 'moment';
import Actions from '../actions';

export default class Post extends React.Component {
    constructor(props){
        super(props);
    }
    getDetail(){
        Actions.Member.getDetail({
            member_id : this.props.post._id
        });
    }
    render(){
        const post = this.props.post;
        return (
            <div className='col-xs-12 col-md-6 col-md-4'>
                <a className='thumbnail'
                    onClick={this.getDetail}
                    href="#">
                    <div>
                        <span className="help-block">
                            {moment(post.created_time * 1000).format('YYYY-MM-DD A hh:mm:ss')}
                        </span>
                    </div>
                    <hr />
                        <p>
                            {post.title}
                        </p>
                </a>
                <div className="col-xs-2 col-md-2 col-lg-2">
                    <a className='thumbnail' href="#"> 分享 </a>
                </div>
                <div className="col-xs-2 col-md-2 col-lg-2">
                    <a className='thumbnail' href="#"> 留言 </a>
                </div>
            </div>
        );
    }
}
