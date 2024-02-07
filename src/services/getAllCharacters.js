import { customUseAxios } from "./apiConfig";

export const GetAllCharactersAxios = ({ pagination, filter }) => {
  const [{ data, loading, error }, reFect] = customUseAxios({
    url: `/people`,
    params: {
      ...pagination,
      ...filter,
    },
  });

  return {
    data,
    loading,
    error,
    reFect,
  };
};
