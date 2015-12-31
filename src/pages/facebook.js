import PageBase from '../utils/PageBase';
import Wechat from 'react-icons/lib/fa/wechat';
import Oup from 'react-icons/lib/fa/thumbs-o-up';
import Shared from 'react-icons/lib/fa/mail-forward';

const styles = {
    block : {
        padding : "25px",
        "margin-top" : "15px",
        border : "1px solid #CCC"
    },
    helpwords : {
        "margin-left" : '5px'
    }
};
export default class Facebook extends PageBase {
    constructor(props){
        super(props);
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
                        <div className="col-lg-12 col-md-12 col-xs-12" style={styles.block}>
                            <div className="row">
                                <a href="/#/facebook">Tomas</a>
                                <span>分享了 ‎ידיעות אחרונות Yedioth Ahronoth‎ 的影片。</span>
                                <hr />

                                <p>作業系統對使用者行為的影響、目標轉換KPI的瓶頸、報表的判讀與分析、網頁優化關鍵......等等技巧，TibaMe 專業Google Analytics 中文線上課程，讓你輕鬆上手，成為網站流量分析人才。現在就上TibaMe免費註冊！</p>
                                <hr />
                                <div className="help-block">
                                    <span style={styles.helpwords}>
                                        <Oup />
                                        100個讚
                                    </span>
                                    <span style={styles.helpwords}>
                                        <Wechat />
                                        100個留言
                                    </span>
                                    <span style={styles.helpwords}>
                                        <Shared />
                                        100個分享
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-xs-4">

                </div>
            </div>
        );
    }
}

