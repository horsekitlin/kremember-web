import { Link } from 'react-router';

export default class SideBar extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return (
            <ul className="metismenu" id="menu">
            <li className="active">
                <a href="#" aria-expanded="true">Menu 1</a>
                <ul aria-expanded="true">
                ...
                </ul>
            </li>
            <li>
                <a href="#" aria-expanded="false">Menu 2</a>
                <ul aria-expanded="false">
                ...
                </ul>
            </li>
            ...
            </ul>
        );
    }
}
