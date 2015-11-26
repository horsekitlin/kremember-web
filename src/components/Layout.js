import Navbar from './Navbar';
import Sidebar from './Sidebar';

class DefaultLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <Navbar />
                <div style={{ height:"100vh"}} className="col-xs-2 col-md-2 col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-xs-10 col-md-10 col-lg-10">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
