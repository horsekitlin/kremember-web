import websetting from '../../config';
import Table from '../components/Table';

export default class Advert extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
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
                                <th>
                                    <td>#</td>
                                    <td>日期</td>
                                    <td>類別</td>
                                    <td>標題</td>
                                    <td>詳細</td>
                                    <td>刪除</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                <td></td>
                                    <td>1</td>
                                    <td>2015-11-11</td>
                                    <td>活動快報</td>
                                    <td>最新的活動在綠園道</td>
                                    <td>
                                        <button className="btn btn-sm btn-info">查看</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-danger">刪除</button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}
