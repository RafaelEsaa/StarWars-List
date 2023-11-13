import { StarWarsClient } from './apiConfig'
import useAxios from "axios-hooks";

export const getAllCharacters = async () => {
    try {
        const result = await StarWarsClient.get('/people');
        return result
    } catch (error) {
        console.log(error)
    }
}

export const GetAllCharactersAxios = ({pagination, filter}) => {
    const [{ data, loading, error }, reFect] =
      useAxios({
        url: "https://swapi.dev/api/people",
        params: {
          ...pagination,
          ...filter,
        },
      });

    return {
        data, loading, error, reFect
    }
}

export const usePrueba = async (param) => {
    return new Promise((resolve, reject) => {
        if(param) {
            resolve('Respuesta aqui')
        } else {
            reject(new Error("Mensaje de error"));
        }
    })
}