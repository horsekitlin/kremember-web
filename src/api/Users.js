import websetting from '../../config';
import { redirect } from '../utils/group';
import { fetch_to } from '../utils/requests';
import { Notifier, Users } from '../stores';

export default{
    Login : (data) => {
        var query = {
            fb_id : data.id,
            name : data.name
        };
        fetch_to('/users/login/v1/', query)
        .then((json) => {
            if(json.status !== 200){
                alert('登入失敗');
            }else{
                data.token = json.data.token;
                Users.update('item', data);
                redirect('/posts');
            }
        }).catch((err) => {
            alert(err);
        });
    }
};
