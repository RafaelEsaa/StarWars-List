import axios from "axios";
import { urlApiBase } from "../helpers/contanst";

axios.create({ url: urlApiBase });

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