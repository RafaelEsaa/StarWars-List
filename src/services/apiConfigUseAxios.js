import axios from "axios";

// request interceptor to add token to request headers
axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers = {
        authorization: `Bearer ${token}`
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor intercepting 401 responses, refreshing token and retrying the request
axios.interceptors.response.use(
  ({ data }) => {
    return {
      data
    };
  },
  async (error) => {
    return Promise.reject(error);
  },
);