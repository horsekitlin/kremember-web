import Table from '../components/Table';

export default class Home extends React.Component{
    render(){
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
                            <th>
                                <td>#</td>
                                <td>會員姓名</td>
                                <td>性別</td>
                                <td>帳號</td>
                                <td>狀態</td>
                                <td>日期</td>
                                <td>動作</td>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                            <td></td>
                                <td>1</td>
                                <td>Tomas</td>
                                <td>男</td>
                                <td>admin</td>
                                <td>正常</td>
                                <td>2015-05-11</td>
                                <td>
                                    <button className="btn btn-success btn-sm">解除</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
