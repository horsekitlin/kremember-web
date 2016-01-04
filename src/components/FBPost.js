import Wechat from 'react-icons/lib/fa/wechat';
import Oup from 'react-icons/lib/fa/thumbs-o-up';
import Shared from 'react-icons/lib/fa/mail-forward';

const styles = {
    block : {
        padding : "25px",
        marginTop : "15px",
        border : "1px solid #CCC"
    },
    helpwords : {
        marginLeft : '5px'
    }
};
export default class FBPost extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const post = this.props.post;

        return(
            <div className="col-lg-12 col-md-12 col-xs-12" style={styles.block}>
                <div className="row">
                    <a href={`https://www.facebook.com/${post.from.id}`}>{post.from.name}</a>
                    <span>{post.story}</span>
                    <hr />
                    <p>{post.message}</p>

                    <hr />
                    <div className="help-block">
                        <span style={styles.helpwords}>
                            <Oup />
                            {post.likes_total}個讚
                        </span>
                        <span style={styles.helpwords}>
                            <Wechat />
                            {post.comments_total}個留言
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

FBPost.propTypes = {
};
