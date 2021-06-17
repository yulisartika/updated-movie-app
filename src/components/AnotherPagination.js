import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { getMovies } from "../redux/actions/movieAction";

const AnotherPagination = ({ currentPage, totalPages }) => {
    const [page, setPage] = useState(currentPage)
    const dispatch = useDispatch()

    const handleChangePage = (pg) => {
        setPage(page)
        dispatch(getMovies(pg));
    };

    const handleNextPage = () => {
        handleChangePage(currentPage + 3)
        setPage(page + 3)
    }

    const handlePrevPage = () => {
        handleChangePage(currentPage - 3)
        setPage(page - 3)
    }
    return (
        <div className="pagination-container">
            {currentPage === 1 || currentPage === 2 || currentPage === 3? <Button disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{"<<"}</Button> 
            : <Button onClick={handlePrevPage}>{"<<"}</Button>}

            {currentPage === totalPages ? 
                <>
                    <Button className="currPage" onClick={() => handleChangePage(totalPages)}>{totalPages}</Button>
                    <Button disabled style={{backgroundColor: "rgb(22, 22, 22)"}}>{">>"}</Button>
                </>
              : (
                <>
                    <Button className={page === currentPage ? "currPage" : ""} onClick={() => handleChangePage(page)}>{page}</Button>
                    <Button className={page + 1 === currentPage ? "currPage" : ""} onClick={() => handleChangePage(page + 1)}>{page + 1}</Button>
                    <Button className={page + 2 === currentPage ? "currPage" : ""} onClick={() => handleChangePage(page + 2)}>{page + 2}</Button>
                    <Button onClick={handleNextPage}>{">>"}</Button>
                </>
            )}
        </div>
    )
}

export default AnotherPagination
