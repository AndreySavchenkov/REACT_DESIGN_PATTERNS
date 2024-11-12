import axios from "axios";

const axiosParams = {
  //Base URL should be set via environment
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:8080" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config = {}) => axios.get(url, config),
    delete: (url, config = {}) => axios.delete(url, config),
    post: (url, config = {}) => axios.post(url, config),
    path: (url, config = {}) => axios.path(url, config),
    put: (url, config = {}) => axios.put(url, config),
  };
};

export default api(axiosInstance);
