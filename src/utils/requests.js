var config = require('../../config.js');
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default {
    fetch_to : (route, data, headers={}) => {
        const url = config.server + route;
        headers.body = data;
        return fetch(url, headers);
    }
};
