import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-6f788.firebaseio.com/'
});

export default instance;