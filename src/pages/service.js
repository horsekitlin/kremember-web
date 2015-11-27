import Table from '../components/Table';
import moment from 'moment';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this._update = this._update.bind(this);
        this.state = {
            questions : [{
                gender : "M",
                icon : "angry",
                name : "Tomas Lin",
                status : 0,
                question : '老師很糟糕',
                created_time : 1447990000.000000
            },{
                icon : "happy",
                name : "Nico Lee",
                gender : "F",
                status : 0,
                question : "老師有耐心",
                created_time : 1448998000.000000
            }, {
                account : "nothing",
                name : "John Lee",
                gender : "M",
                status : 1,
                question : "老師很普通",
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
        const questions = this.state.questions;

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
                    <div className="col-xs-2 col-md-2 col-lg-2">
                        <input type="button" className='btn btn-primary btn-sm' value='搜尋' />
                    </div>
                    <div className="col-xs-4 col-md-4 col-lg-4">
                        <div className="input-group input-group-sm pull-right">
                            <select id="" name="" className='form-control'>
                                <option value="">全部</option>
                                <option value="">未回</option>
                                <option value="">已回</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="sr-only"></div>
                <div className="row form-group">
                    <Table hover striped bordered condensed center>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>日期</th>
                                <th>心情</th>
                                <th>會員姓名</th>
                                <th>內容</th>
                                <th>詳細</th>
                                <th>狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => {
                                const status = (question.status === 1);
                                return (
                                    <tr key={`u_list-${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{moment(question.created_time).format('YYYY-MM-DD')}</td>
                                        <td>{(question.icon==='happy' ? '開心': '難過')}</td>
                                        <td>{question.name}</td>
                                        <td>{question.question}</td>
                                        <td><button className="btn btn-info btn-sm">詳情</button></td>
                                        <td>{status
                                                ? <button className='btn-warning btn btn-sm'>已回</button>
                                                : <button
                                                    className="btn btn-danger btn-sm">未回覆</button>
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
