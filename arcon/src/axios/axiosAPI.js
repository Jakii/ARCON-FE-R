import axios from 'axios';

export default axios.create({
    baseURL:'https://arconapi.azurewebsites.net/api/',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
    }
})