import moment from 'moment';
import { redirect } from '../utils/group';
import { fetch_to, format_headers } from '../utils/requests';
import { Notifier, Member, Users } from '../stores';

class MemberBase extends Object {
    constructor(){
        super();
        this.Create = this.Create.bind(this);
    }
    List(){
        var user = Users.detail();
        fetch_to('/member/list/v1/', {}, {
            token : user.token
        }).then((res) => {
            if(res.status === 200){
                Member.update('list', res.data.content);
                Notifier.reloadpage();
            }
        });
    }
    getDetail(data){
        let posts = this.List();

        console.log(posts);
        let post = _.find(posts, (p) => {
            return p._id === data.member_id;
        });
        Member.update('item', post);
        redirect(`/post/${data.member_id}`);
    }
    Create(data){
        let user = Users.detail();
        let headers = format_headers();

        headers.token = user.token;

        data.posts = _.map(data.posts, (post) => {
            post.created_time = moment(post.created_time).unix();
            post.updated_time = moment(post.updated_time).unix();
            return post;
        });

        fetch_to('/member/created/v1/', data, headers)
        .then((res) => {
            if(res.status === 200){
                this.List();
                redirect('/posts');
            }else{
                console.log(res);
                alert('新增失敗');
            }
        }.bind(this)).catch((err) => {
            console.log(err);
            alert('新增失敗');
        });
    }
}

var MemberManager = new MemberBase();

export default MemberManager;
