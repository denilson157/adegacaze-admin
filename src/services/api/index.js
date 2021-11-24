import axios from 'axios';
import { getToken } from '../auth'

export const APIUrl = "http://192.168.15.64:8080/api/";

const patternHeader = {
    'Content-Type': 'application/json', 
    'Accept': 'text/html', 
    'Authorization': `Bearer ${getToken()}`
};

const instance = (url = APIUrl, header = patternHeader) =>
    axios.create({
        baseURL: `${url}`,
        headers: header
    });


export default instance;