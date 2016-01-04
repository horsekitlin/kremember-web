import PageBase from '../utils/PageBase';
import { Store_Fans, Store_Posts } from '../stores';
import { Act_Fans, Act_Posts } from '../actions';
import { Multiselect } from 'react-widgets';
import { Notifier } from '../stores';

const styles = {
    block : {
        padding : "25px",
        "margin" : "0 0 0 0",
        border : "1px solid #CCC"
    },
};

export default class Fans_list extends PageBase{
    constructor(props){
        super(props);
        this._reloadComponent = this._reloadComponent.bind(this);
        this.searchposts = this.searchposts.bind(this);
        this._evts = [{
            name : 'fanschange',
            method : this._reloadComponent
        },{
            name : 'postschange',
            method : this._reloadComponent
        }];

        this.state = {
            query : Store_Posts.get('query'),
            open : false,
            disabled : false,
            fans : []
        };
    }
    _reloadComponent(){
        this.setState({
            fans : Store_Fans.listAll(),
            disabled : false
        });
    }
    componentDidMount(){
        Act_Fans.List();
    }
    searchposts(fanspage){
        let query = this.state.query;
        query.skip = 0;
        query.limit = 20;
        query.fans_id = _.map(fanspage, (f) => {
            return f.fans_id;
        });
        this.setState({
            disabled : true
        });
        Act_Posts.List(query);
    }
    render(){
        const open = this.state.open,
            toggle = () => this.setState({open : !open});

        return (
            <div className="row" style={styles.block}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h4>請選擇您欲觀看的粉絲團</h4>
                    <button className="btn btn-sm btn-primary"
                        onClick={toggle}>
                        {open ? 'close' : 'open'}
                    </button>
                    <hr/>
                    <Multiselect
                        valueField='_id'
                        onChange={this.searchposts}
                        textField='name'
                        disabled={this.state.disabled}
                        open={open}
                        data={this.state.fans}
                        onTggle={() => {}} />
                </div>
            </div>
        );
    }
}
