import { Link } from 'react-router';

export default class App extends React.Component{
  render() {
    return (
        <Link to={`/login/`}>
        <h4>
            Login
            1111
        </h4>
        </Link>
    );
  }
}
