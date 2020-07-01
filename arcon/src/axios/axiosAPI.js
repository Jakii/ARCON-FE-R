import axios from 'axios';

export default axios.create({
    baseURL:'http://18.219.124.253/api/',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})