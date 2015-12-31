import layoutDefault from './layoutDefault';
import Navbar from './navbar';

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = { layoutDefault : React.PropTypes.func };
App.defaultProps = { layoutDefault : layoutDefault };

export default App;
