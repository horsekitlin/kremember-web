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
                    <h4>廣告列表(上限五則)</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <a href={`${websetting.client}/#/createadvert`} className="btn btn-sm btn-primary">新增</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <Table hover striped bordered condensed center>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>日期</th>
                                    <th>圖片</th>
                                    <th>網址</th>
                                    <th>刪除</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td></td>
                                    <td>1</td>
                                    <td>2015-11-11</td>
                                    <td>123.jpg</td>
                                    <td>www.google.com</td>
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
