import { createHistory, createHashHistory } from 'history';
import Root from './Root';

const rootEl = document.getElementById('container');

const history = process.env.NODE_ENV === 'production' ?
    createHashHistory() :
    createHistory();

ReactDOM.render(<Root history={history} />, rootEl);
