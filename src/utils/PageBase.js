require("bootstrap-webpack");
import Notifier from '../api';

export default class PageBase extends React.Component {
    constructor(props, evts=[]){
        super(props);
    }
    componentWillMount(){
        const _evts = this._evts || [];
        _evts.map((evt, key) => {
            Notifier.addListener(evt.name, evt.method);
        });
    }
    componentWillUnmount(){
        const _evts = this._evts || [];
        _evts.map((evt) => {
            Notifier.removeChangeListener(evt.name, evt.method);
        });
    }
}
