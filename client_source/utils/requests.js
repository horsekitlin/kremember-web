var config = require('../../config.js');

export default {
    fetch_to : (route, data, headers={}) => {
        return $.ajax({
            url : config.server + route,
            data : data,
            headers : headers,
            method : 'POST',
            cache : false,
        });
    }
};
