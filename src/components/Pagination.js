import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { getMovies } from "../redux/actions/movieAction";

function Pagination({ totalPages }) {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getMovies(pg));
  };

  // console.log(totalPages);

  return (
    <div className="pagination-container">
      {page > 1 ? (
        <Button onClick={() => handleChangePage(page - 1)}>{"<<"}</Button>
      ) : (
        <Button disabled>{"No Previous"}</Button>
      )}

      {page !== totalPages ? (
        <Button onClick={() => handleChangePage(page + 1)}>{`>>`}</Button>
      ) : (
        <Button disabled>{"No More Next"}</Button>
      )}
    </div>
  );
}

export default Pagination;
