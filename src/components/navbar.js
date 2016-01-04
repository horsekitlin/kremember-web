import websetting from '../../config';
import FaBell from 'react-icons/lib/fa/bell'
import Wechat from 'react-icons/lib/fa/wechat';
import Badge from './Badge';
import { Link } from 'react-router';
import { Store_Posts } from '../stores';
import { Act_Posts } from '../actions';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        let query = Store_Posts.get('query');
        this.updatemsg = this.updatemsg.bind(this);
        this.searchpost = this.searchpost.bind(this);
        this.state = {
            query : query
        };
    }
    updatemsg(e){
        let query = this.state.query;
        query.message = e.target.value;
        this.setState({query : query});
    }
    searchpost(e){
        Act_Posts.List(this.state.query);
    }
    render(){
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link
                            className="navbar-brand"
                            to="/">
                            PostsViewer
                        </Link>
                        <button
                            className="navbar-toggle"
                            type="button"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"
                            aria-controls="#bs-example-navbar-collapse-1"
                            aria-expanded="true">

                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <form className="navbar-form navbar-left" role="search">
                            <div className="input-group input-group-sm">
                                <input
                                    type="text"
                                    value={this.state.query.message}
                                    onChange={this.updatemsg}
                                    className="form-control"
                                    placeholder="Enter Any Word to search"
                                    aria-describedby="sizing-addon3" />
                                <span
                                    onClick={this.searchpost}
                                    className="btn btn-defaultbtn-sm input-group-addon"
                                    id="sizing-addon3">
                                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                </span>
                            </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <span className='glyphicon glyphicon-user'></span>
                                    <Badge count={3} />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">登出</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <Wechat />
                                    <Badge count={5} />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">登出</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    <FaBell />
                                    <Badge count={2} />
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Setting</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li>
                                        <a href="#">登出</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
