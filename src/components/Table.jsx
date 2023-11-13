/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";

const Table = ({ rows, loadingData, changePage, search }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [data, setData] = useState([]);

  const [rowCount, setRowCount] = useState(0);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  useEffect(() => { 
      changePage(pagination.pageIndex+1);
      setPagination({
        ...pagination,
        pageIndex: pagination.pageIndex
      })
  }, [pagination.pageIndex]);

  useEffect(() => {
      search(globalFilter)
  }, [globalFilter])

  useEffect(() => {
    if(rows){
        setData(rows.results);
        setRowCount(rows.count);
    }
  }, [rows]);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "First Name",
      },
      {
        accessorKey: "height",
        header: "Last Name",
      },
      {
        accessorKey: "mass",
        header: "Address",
      },
      {
        accessorKey: "hair_color",
        header: "State",
      },
      //end
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      getRowId={(row) => row.name}
      initialState={{ showColumnFilters: true }}
      manualFiltering
      manualPagination
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      rowCount={rowCount}
      enablePagination={!loadingData}
      state={{
        globalFilter,
        isLoading: loadingData,
        pagination,
      }}
    />
  );
};

export default Table;
