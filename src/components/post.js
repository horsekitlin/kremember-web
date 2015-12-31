import moment from 'moment';
import Actions from '../actions';

export default class Post extends React.Component {
    constructor(props){
        super(props);
        this.getDetail = this.getDetail.bind(this);
    }
    getDetail(){

        Actions.Member.GetDetail({
            member_id : this.props.post._id
        });
    }
    render(){
        const post = this.props.post;
        return (
            <section>
                <a className='thumbnail'
                    onClick={this.getDetail}
                    href={`/kremember/#/post/${post._id}`}>
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
            </section>
        );
    }
}
