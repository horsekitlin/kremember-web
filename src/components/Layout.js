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
                    <div className="page-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultLayout;
