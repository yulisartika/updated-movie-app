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
        <>
          <Button onClick={() => handleChangePage(1)}>{"<<"}</Button>
          <Button className="prev" onClick={() => handleChangePage(page - 1)}>{"<"}</Button>
        </>
      ) : (
        <>
          <Button disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{"<<"}</Button>
          <Button className="prev" disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{"<"}</Button>
        </>
      )}

      {page !== totalPages ? (
        <>
          <Button className="next" onClick={() => handleChangePage(page + 1)}>{`>`}</Button>
          <Button onClick={() => handleChangePage(totalPages)}>{`>>`}</Button>
        </>

      ) : (
        <>
          <Button className="next" disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{">"}</Button>
          <Button disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{">>"}</Button>
        </>
        
      )}
    </div>
  );
}

export default Pagination;
