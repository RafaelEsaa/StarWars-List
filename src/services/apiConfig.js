import axios from "axios";
import { makeUseAxios } from "axios-hooks";
import { urlApiBase } from "../helpers/contanst";

const StarWarsClient = axios.create({
  baseURL: urlApiBase,
});

StarWarsClient.interceptors.response.use(
  ({ data }) => {
    const x = { data: { ...data, hola: "Rafael" } };
    return x;
  },
  (error) => {
    return Promise.reject(error);
  },
);

StarWarsClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Rafael";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const customUseAxios = makeUseAxios({
  axios: StarWarsClient,
});

export { StarWarsClient, customUseAxios };