import websetting from '../../config';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link
                            className="navbar-brand"
                            to="/">
                            Kremember
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
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link
                                    to="/createmember">
                                    新增記事
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                    About User
                                    <span className="caret"></span>
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
