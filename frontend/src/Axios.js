import axios from "axios"
export const Axios = axios.create({
    withCredentials: true,
    baseURL: 'http://3.112.22.67/'
})