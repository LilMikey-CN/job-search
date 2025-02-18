import axios from "axios";
import { useNavigate } from "react-router-dom";
/*
 * 创建实例
 * 与后端服务通信
 */
/**
 * Create an instance
 * Communicate with the backend service
 */
const HttpClient = axios.create({
  baseURL: "/api",
});

/**
 * 请求拦截器
 * 功能：配置请求头
 */
/**
 * Request interceptor
 * Function: Configure request header
 */

/*

HttpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.error("Network error: Failed to send request!");
    return Promise.reject(error);
  }
);

*/


/**
 * Response interceptor
 * Function: Handle exceptions
 */

/*
HttpClient.interceptors.response.use(
  (config) => {
    return config.data?.data || config.data;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        const navigate = useNavigate();
        navigate("/login");
        alert("The token has expired, please log in again!");
      }
    }
    return Promise.reject(error);
  }
);

*/

export default HttpClient;
