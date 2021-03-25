import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { getMovies } from "../redux/actions/movieAction";

function Pagination() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getMovies(pg));
  };

  return (
    <div className="pagination-container">
      {page !== 1 && (
        <Button onClick={() => handleChangePage(page - 1)} className="page">
          {page !== 1 ? "<<" : ">>"}
        </Button>
      )}
      {/* <Button
        onClick={() => handleChangePage(1)}
        color={page === 1 ? "secondary" : "genre-button"}
        // className="rounded-circle mr-2"
      >
        1
      </Button>
      <Button
        onClick={() => handleChangePage(2)}
        color={page === 2 ? "secondary" : "genre-button"}
        // className="rounded-circle mr-2"
      >
        2
      </Button>
      <Button
        onClick={() => handleChangePage(3)}
        color={page === 3 ? "secondary" : "genre-button"}
        // className="rounded-circle mr-2"
      >
        3
      </Button> */}
      {/* next seharusnya dirubah juga  later! */}
      <Button onClick={() => handleChangePage(page + 1)} className="page">
        {`>>`}
      </Button>
    </div>
  );
}

export default Pagination;
