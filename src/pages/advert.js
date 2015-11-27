import websetting from '../../config';
import Table from '../components/Table';
import moment from 'moment';
export default class Advert extends React.Component{
    constructor(props){
        super(props);
        this._delete = this._delete.bind(this);
        this.state = {
            adverts : [{
                created_time : 1447990000.000000,
                mainpic : '123.jpg',
                url : 'http://google.com.tw'
            },{
                created_time : 1448990000.000000,
                mainpic : '456.jpg',
                url : 'http://yahoo.com.tw'
            }]
        };
    }
    _delete(e){
        if(confirm('是否要刪除?')){
            let adverts = this.state.adverts;
            const index = parseInt(e.target.id.split('-')[1]);
            if(adverts.length > 1){
                _.remove(adverts, (advert, i) => {
                    return index === i;
                });
            }else{
                adverts = [];
            }
            this.setState({
                adverts : adverts
            });
        }
    }
    render(){
        const adverts = this.state.adverts;

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
                                {adverts.map((advert, index) => {
                                  return (
                                        <tr key={`advert-${index}`}>
                                            <td>{index +1}</td>
                                            <td>{moment(advert.created_time).format('YYYY-MM-DD')}</td>
                                            <td>{advert.mainpic}</td>
                                            <td>{advert.url}</td>
                                            <td>
                                                <button
                                                    onClick = {this._delete}
                                                    id={`kill-${index}`}
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
