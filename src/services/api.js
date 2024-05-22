import axios from "axios";
import {URIs} from "@/services/URIs";
import {getToken} from "@/utils/tokenUtils";
import {message} from "antd"

export const api = axios.create({
    baseURL: URIs.dev,
    headers: {
        "Accept": "application/json",
    },
});

api.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
api.interceptors.response.use(
    response => {
        return response;
    },
    err => {
        if (err.response && err.response.data && err.response.data.message) {
            message.error(err.response.data.message);
        } else {
            message.error("Ocorreu um erro desconhecido.");
        }
        return Promise.reject(err);
    }
);


export default api;