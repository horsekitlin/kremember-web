import { redirect } from '../utils/group';
import { fetch_to, format_headers } from '../utils/requests';
import { Notifier, Store_Fans } from '../stores';

class FansBase extends Object {
    constructor(){
        super();
    }
    List(data){
        fetch_to(`/api/fans/list/`, {}, {
        }).then((res) => {
            Store_Fans.update('list', res.content);
            Store_Fans.update('total', res.total);
            Notifier.brocase('fanschange');
        }).catch((err) => {
            alert(err);
        });
    }
}

var FansManager = new FansBase();

export default FansManager;
