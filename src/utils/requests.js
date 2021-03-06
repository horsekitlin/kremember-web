var config = require('../../config.js');
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default {
    format_headers : () => {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    },
    fetch_to : (route, data, headers={
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }) => {
        const url = config.server + route;
        const myHeaders = new Headers(headers);
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : 'POST',
                headers : headers,
                body : JSON.stringify(data)
            }).then((resp) => {
                return resp.json();
            }).then((json) => {
                resolve(json);
            }).catch((err) => {
                reject(err);
            });
        });
    }
};
