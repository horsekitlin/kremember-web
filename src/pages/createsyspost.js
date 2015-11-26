import moment from 'moment';

export default class CreateSysPost extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="well well-sm">
                    <h4>新增公告</h4>
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
                                        <div className="input-group input-group-sm">
                                            <select id="type" name="type" className="form-control">
                                                <option value="">選擇類別</option>
                                                <option value="">系統通知</option>
                                                <option value="">公益活動</option>
                                                <option value="">活動快報</option>
                                            </select>
                                        </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-xs-12 form-group">
                                    <div className="col-xs-3 col-md-3 col-lg-3">
                                        <span>標題:</span>
                                    </div>
                                    <div className="col-xs-9 col-md-9 col-lg-9">
                                        <input type="text" name='title' id='title' className="form-control" />
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
                                <div className="col-xs-12 col-md-12 col-lg-12 form-group">
                                    <textarea className='form-control' cols="30" rows="10"></textarea>
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
