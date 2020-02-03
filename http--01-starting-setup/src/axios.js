import Axios from "axios";

const instance = Axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['auth']='auth here from instance';

export default instance;