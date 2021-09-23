import axios from 'axios';
import { getToken } from '../auth'

export const APIUrl = "http://127.0.0.1:8000/api/";

const patternHeader = { 'Content-Type': 'application/json', 'Accept': 'text/html', "Authorization": `Bearer ${getToken()}` };

const instance = (url = APIUrl, header = patternHeader) =>
    axios.create({
        baseURL: `${url}`,
        headers: header
    });


export default instance;