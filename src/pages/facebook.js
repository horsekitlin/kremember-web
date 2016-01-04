import PageBase from '../utils/PageBase';
import FBPost from '../components/FBPost';
import FansList from '../components/Fans_list';
import { Act_Posts } from '../actions';

const styles = {
    block : {
        padding : "25px",
        "margin" : "0 0 0 0",
        border : "1px solid #CCC"
    },
};
export default class Facebook extends PageBase {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        Act_Posts.List({skip:0, limit : 10});
    }
    chgposttype(e){
        e.preventDefault();
    }
    render(){

        return (
            <div className="row">
                <div className="col-lg-8 col-md-8 col-xs-8">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-xs-12" style={styles.block}>
                            <div className="btn-group btn-group-sm">
                                <button type="button" className="btn btn-default">近況更新</button>
                                <button type="button" className="btn btn-default">新增照片</button>
                            </div>
                            <textarea id="" name="" rows="5" className="form-control" placeholder='在想些什麼?'></textarea>
                            <div className="pull-right"><button className='btn btn-primary btn-sm'>發布</button></div>
                        </div>
                        <hr />
                        <FBPost />

                        <FBPost />
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-4">
                    <FansList />
                </div>
            </div>
        );
    }
}

