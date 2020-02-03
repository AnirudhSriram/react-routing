import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
Axios.interceptors.request.use(request => {
    return request
}, error => {
    return Promise.reject(error);
});

Axios.interceptors.response.use(res => {
return res;

}, rej => {
    console.log("here");
    return Promise.reject(rej);
})
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
