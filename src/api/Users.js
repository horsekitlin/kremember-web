import websetting from '../../config';
import { redirect } from '../utils/group';
import { fetch_to } from '../utils/requests';
import { Notifier, Users } from '../stores';

export default{
    Login : (data) => {
        fetch_to('/admin/login/v1/', data)
        .then((json) => {
            if(json.status !== 200){
                alert('登入失敗');
            }else{
                Users.update('item', json.data);
                redirect('');
            }
        }).catch((err) => {

            alert(err);
        });
    }
};
