import axios from "axios";
import { urlApiBase } from '../helpers/contanst'

const StarWarsClient = axios.create({
  baseURL: urlApiBase,
});

StarWarsClient.interceptors.request.use(
  (config) => {
    return {
      ...config,
    };
  },
  (error) => {
    Promise.reject(error);
  },
);

StarWarsClient.interceptors.response.use(
  ({ data }) => {
    return {
      ...data,
    };
  },
  (error) => {
    Promise.reject(error);
  },
);

export {
  StarWarsClient
}