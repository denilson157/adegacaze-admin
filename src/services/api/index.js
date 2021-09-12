import axios from 'axios';
import { getToken } from '../auth'

export const APIUrl = "http://127.0.0.1:8000/api/";

const instance = () =>
    axios.create({
        baseURL: `${APIUrl}`,
        headers: { 'Content-Type': 'application/json', 'Accept': 'text/html', "Authorization": `Bearer ${getToken()}` }
    });


export default instance;