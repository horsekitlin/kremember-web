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
export default class FBPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
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
            </div>
        );
    }
}
