require("bootstrap-webpack");
import Notifier from '../api';

export default class PageBase extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
//        Notifier.addListener('ReloadPage', this.reloadpage);
    }
    componentWillUnmount(){
//        Notifier.removeChangeListener(this.reloadpage);
    }
}
