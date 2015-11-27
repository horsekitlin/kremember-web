import websetting from '../../config';
import Table from '../components/Table';
import moment from 'moment';

export default class Advert extends React.Component{
    constructor(props){
        super(props);
        this._delete = this._delete.bind(this);
        this.state = {
            posts : [{
                created_time : 1448990000000.000,
                type : '活動快報',
                title : '最新活動在綠園道'
            },{
                created_time : 1447990000000.000,
                type : '活動快報',
                title : '下週最新活動報告'
            }]
        };
    }
    _delete(e){
        if(confirm('是否要刪除?')){
            let posts = this.state.posts;
            const index = parseInt(e.target.id.split('-')[1]);
            if(posts.length > 1){
                _.remove(posts, (post, i) => {
                    return index === i;
                });
            }else{
                posts = [];
            }
            console.log(posts);
            this.setState({
                posts : posts
            });
        }
    }
    render(){
        const posts = this.state.posts;

        return (
            <div>
                <div className="well well-sm">
                    <h4>公告列表</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <a href={`${websetting.client}/#/createsyspost`} className="btn btn-sm btn-primary">新增</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <Table hover striped bordered condensed center>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>日期</th>
                                    <th>類別</th>
                                    <th>標題</th>
                                    <th>詳細</th>
                                    <th>刪除</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post, index) => {
                                    return(
                                        <tr key={`post-${index}`}>
                                            <td>{index + 1}</td>
                                            <td>{moment(post.created_time).format('YYYY-MM-DD')}</td>
                                            <td>{post.type}</td>
                                            <td>{post.title}</td>
                                            <td>
                                                <button className="btn btn-sm btn-info">查看</button>
                                            </td>
                                            <td>
                                                <button
                                                    id={`kill-${index}`}
                                                    onClick={this._delete}
                                                    className="btn btn-sm btn-danger">刪除</button>
                                            </td>
                                        </tr>
                                    );
                                }.bind(this))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}
