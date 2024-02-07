// import "./services/apiConfigUseAxios"
import { useState } from "react";
import { GetAllCharactersAxios } from "./services/getAllCharacters";

import Table from "./components/Table";

const App = () => {
  const [pagination, setPagination] = useState({});
  const [filter, setFilter] = useState({});
  const {
    data: getData,
    loading: getLoading,
    error: getError,
    reFect,
  } = GetAllCharactersAxios({ pagination, filter });

  console.log(getError);

  const handleChangePage = (numberPage) => {
    setPagination({
      page: numberPage,
    });
  };

  const handleSearch = (text) => {
    setFilter({
      search: text,
    });
  };

  return (
    <>
      <button onClick={() => reFect()}>Re fetching data</button>
      <p>StarWars api</p>
      <Table
        loadingData={getLoading}
        rows={getData}
        search={(text) => handleSearch(text)}
        changePage={(page) => handleChangePage(page)}
      />
    </>
  );
};

export default App;
