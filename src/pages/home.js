import Table from '../components/Table';
import moment from 'moment';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this._update = this._update.bind(this);
        this.state = {
            users : [{
                gender : "M",
                account : "Tomas",
                name : "Tomas Lin",
                status : 1,
                created_time : 1447990000.000000
            },{
                account : "Nico",
                name : "Nico Lee",
                gender : "F",
                status : 1,
                created_time : 1448998000.000000
            }, {
                account : "John",
                name : "John Lee",
                gender : "M",
                status : 0,
                created_time : 1449998000.000000
            }]
        };
    }
    _update(e){
        if(confirm('是否確定解除封印?')){
            const index = e.target.id.split('-')[1];
            let users = this.state.users;
            users[index].status = 1;
            this.setState({users : users});
        }
    }
    render(){
        const users = this.state.users;

        return (
            <div>
                <div className="row form-group">
                    <div className="col-xs-4 col-md-4 col-lg-4">
                        <div className="input-group input-group-sm">
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </span>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                    </div>
                    <div className="col-xs-8 col-md-8 col-lg-8">
                        <input type="button" className='btn btn-primary btn-sm' value='搜尋' />
                    </div>
                </div>
                <div className="sr-only"></div>
                <div className="row form-group">
                    <Table hover striped bordered condensed center>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>會員姓名</th>
                                <th>性別</th>
                                <th>帳號</th>
                                <th>狀態</th>
                                <th>日期</th>
                                <th>動作</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => {
                                const status = user.status === 1;
                                return (
                                    <tr key={`u_list-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{(user.gender === 'M' ? '男' : '女')}</td>
                                        <td>{user.name}</td>
                                        <td>{status
                                                ? <p>正常</p>
                                                : <p className='text-danger'>廢除</p>}</td>
                                        <td>{moment(user.created_time).format('YYYY-MM-DD')}</td>
                                        <td>{status
                                                ? ''
                                                : <button
                                                    id={`user-${index}`}
                                                    onClick={this._update}
                                                    className="btn btn-success btn-sm">解除</button>
                                        }
                                        </td>
                                    </tr>
                                );
                            }.bind(this))}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
