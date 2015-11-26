import Navbar from './Navbar';
import Sidebar from './Sidebar';

class DefaultLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <div className="row">
                    <Navbar />
                    <div style={{ height:"100vh"}} className="col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
