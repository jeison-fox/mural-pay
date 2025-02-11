import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const ApiKey = process.env.REACT_APP_API_KEY;

    if (ApiKey) {
      config.headers.Authorization = `Bearer ${ApiKey}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
