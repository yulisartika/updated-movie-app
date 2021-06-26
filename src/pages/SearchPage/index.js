import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import { getMoviesAndShowsBySearch } from "../../redux/actions/movieAction";
import noImageFound from "../../assets/no_image_found.png";
import Pagination from "../../components/Pagination";

function SearcPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { searchMovie, totalSearchPages, totalSearchResults, keyword } =
    useSelector((state) => state.movies);

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getMoviesAndShowsBySearch(keyword, pg));
  };

  useEffect(() => {
    setIsLoading(true);
    // the conditional: keyword !== "" is used to avoid empty query that would result in 422 status code
    keyword !== "" && dispatch(getMoviesAndShowsBySearch(keyword, page));
    setIsLoading(false);
  }, [dispatch, keyword, page]);

  console.log(totalSearchResults);
  console.log(keyword);

  return (
    <>
      <Container className="mt-5 mb-5">
        <h4>Search Keyword: {keyword}</h4>
        <h1>{totalSearchResults} Result(s)</h1>
        <div className="movies-list">
          {searchMovie.length !== 0 ? (
            searchMovie.map((item, index) => (
              <div className="movie-item" key={index}>
                <MovieCard
                  image={
                    item.poster_path !== null
                      ? `${image_baseUrl}${item.poster_path}`
                      : noImageFound
                  }
                  title={item.original_title}
                  rating={item.vote_average / 2}
                  vote={item.vote_count}
                  overview={item.overview}
                  release={item.release_date}
                  forAge={item.adult}
                  id={item.id}
                />
              </div>
            ))
          ) : (
            <>
              {isLoading ? (
                <Spinner color="danger" className="spinner" type="grow" />
              ) : (
                "No Results"
              )}
            </>
          )}
        </div>
      </Container>
      <Pagination
        page={page}
        totalPages={totalSearchPages}
        handleChangePage={handleChangePage}
      />
    </>
  );
}

export default SearcPage;
