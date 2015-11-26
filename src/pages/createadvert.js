import moment from 'moment';

export default class CreateAdvert extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="well well-sm">
                    <h4>新增廣告</h4>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                        <form action="." method="POST" onSubmit="">
                            <legend></legend>
                            <fieldset>
                                <div className="col-lg-12 col-md-12 col-xs-12 form-group">
                                    <div className="col-xs-3 col-md-3 col-lg-3">
                                        <span>日期:</span>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-lg-9">
                                        <span>{moment().format('YYYY-MM-DD A hh:mm')}</span>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-xs-12 form-group">
                                    <div className="col-xs-3 col-md-3 col-lg-3">
                                        <span>網址:</span>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-lg-9">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="example:http://goole.com.tw" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-xs-12 form-group">
                                    <div className="col-xs-3 col-md-3 col-lg-3">
                                        <div className="input-group input-group-sm">
                                            <input type="file" className="form-control" />
                                            <p className="text-danger">
                                                寬324px ~ 1080px
                                            </p>
                                            <p className="text-danger">
                                                高87px ~ 290px
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-lg-9">
                                        <p>image preview</p>
                                        <input type="button" value="刪除" className="btn btn-danger btn-sm" />
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-xs-12 form-group">
                                    <div className="col-xs-10 col-md-10 col-lg-10">
                                        <input type="submit" value="送出" className="btn btn-primary btn-sm" />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
