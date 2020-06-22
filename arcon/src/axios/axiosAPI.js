import axios from 'axios';

export default axios.create({
    baseURL:'https://arconhnapi.azurewebsites.net/api/',
    headers:{
        'Content-Type':'application/json',
        Accept:'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})