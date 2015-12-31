import PageBase from '../utils/PageBase';

export default class Login extends PageBase {
    constructor(props){
        super(props);
    }
    eventtype(e){
        console.log(e.type);
    }
    render(){
        return (
            <div className="row">
                <h1 onClick={this.eventtype}>Hello11112</h1>
            </div>
        );
    }
}

