export default class Notification extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="well well-sm">
                    <h4>推播功能</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <h4>推播內容</h4>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <textarea className='form-control' cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-xs-12 col-md-12 col-lg-12 from-group">
                        <input type="button" className='btn btn-info btn-sm pull-right' value='送出'/>
                    </div>
                </div>
            </div>
        );
    }
}
