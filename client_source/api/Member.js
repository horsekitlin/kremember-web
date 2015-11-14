import moment from 'moment';
import { redirect } from '../utils/group';
import { fetch_to } from '../utils/requests';
import { Notifier, Member, Users } from '../stores';

export default{
    List : () => {
        var user = Users.detail();
        fetch_to('/member/list/v1/', {}, {
            token : user.token
        }).done((res) => {
            if(res.status === 200){
                Member.update('list', res.data.content);
                Notifier.reloadpage();
            }
        });
    },
    Create : (data) => {
        var user = Users.detail();
        data.posts = _.map(data.posts, (post) => {
            post.created_time = moment(post.created_time).unix();
            post.updated_time = moment(post.updated_time).unix();
            return post;
        });
        fetch_to('/member/created/v1/', data, {
            token : user.token
        })
        .done((res) => {
            console.log(res.status);
            if(res.status === 200){
                redirect('/home.html');
            }else{
                alert('新增失敗');
            }
        });
    }
};
