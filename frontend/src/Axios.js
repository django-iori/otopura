import axios from "axios"
export const Axios = axios.create({
    withCredentials: true,
    baseURL: 'https://api.otopura-be.com/'
})