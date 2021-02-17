import axios from 'axios';
import {
    LOGIN_USER
} from './types'

export default function loginUser(dataTosubmit) {

    const request = axios.post('/api/user/login', dataTosubmit)
        .then(response => response.data)

    return {
        type: "LOGIN_USER",
        payload: request
    }
}