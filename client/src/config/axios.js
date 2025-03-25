import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'http://localhost:8000/',
});

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (err) {
    const status = err.response?.status || 500;
    switch (status) {
       
        case 404: {
            toast.error(err.response.data.message);
            break;
        }
       
        default:{
            return Promise.reject();
        }
    }
   
});


export default instance;