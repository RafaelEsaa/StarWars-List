import { configure } from "axios-hooks";
import Axios from "axios";
import { urlApiBase } from "../helpers/contanst";

const axios = Axios.create({
  baseURL: urlApiBase,
});

axios.interceptors.response.use(
  ({ data }) => {
    return {
      data: {
        ...data,
        rafael: "hola",
      },
    };
  },
  async (error) => {
    console.log("error en interceptor: ", error);
    return Promise.reject(error);
  },
);

axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer holaMundo123`;
    return config;
  },
  function (error) {
    return Promise.reject(error.response);
  },
);

configure({ axios });
