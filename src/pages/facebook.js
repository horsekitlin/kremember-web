import PageBase from '../utils/PageBase';
import FBPost from '../components/FBPost';
import { Multiselect } from 'react-widgets';

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
        this.state = {
            open : false
        };
    }
    chgposttype(e){
        e.preventDefault();
    }
    render(){
        const open = this.state.open,
            toggle = () => this.setState({open : !open});

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
                    <div className="row" style={styles.block}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h4>請選擇您欲觀看的粉絲團</h4>
                            <button className="btn btn-sm btn-primary"
                                onClick={toggle}>
                                {open ? 'close' : 'open'}
                            </button>
                            <hr/>
                            <Multiselect
                                valueField='id'
                                textField='name'
                                open={open}
                                data={[{id:1, name:"羅小白"}, {id:2, name:"拐拐"}]}
                                onTggle={() => {}} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

