import axios from "axios";
import {URIs} from "@/services/URIs";
import {getToken} from "@/utils/tokenUtils";

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

export default api;