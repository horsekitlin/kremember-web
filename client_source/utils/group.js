import websetting from '../../config.js';

export function redirect(route){
    const url = websetting.client + route;
    location.href = url;
}

