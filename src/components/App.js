import layoutDefault from './layoutDefault';
import Tabs from './Tabstacked';
import Navbar from './navbar';

class App extends React.Component{
    constructor(){
        super();
        this.static = {

        }
    }
    render(){
        const route = window.location.hash.replace('#/', '');
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-xs-2">
                        <Tabs Pills Stacked>
                            <li className={route === 'facebook' ? 'active' : ''}><a href="/#/facebook">Facebook</a></li>
                            <li className={route === 'twitter' ? 'active' : ''}><a href="/#/twitter">Twitter</a></li>
                            <li className={route === 'ptt' ? 'active' : ''}><a href="/#/ptt">PTT</a></li>
                        </Tabs>
                    </div>
                    <div className="col-lg-10 col-md-10 col-xs-10">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = { layoutDefault : React.PropTypes.func };
App.defaultProps = { layoutDefault : layoutDefault };

export default App;
