import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { getPopularMovies } from "../../redux/actions/movieAction";
import noImageFound from "../../assets/no_image_found.png";

const PopularMovies = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { popularMovies, totalPagesPopMovie } = useSelector(
    (state) => state.movies
  );

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getPopularMovies(pg));
  };

  useEffect(() => {
    dispatch(getPopularMovies(page));
  }, [dispatch, page]);

  // console.log("popular page", popularMovies);

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1>Popular Movies</h1>
        <div className="movies-list">
          {popularMovies.length !== 0 ? (
            popularMovies.map((item) => (
              <div className="movie-item" key={item.id}>
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
              <Spinner color="danger" className="spinner" />
            </>
          )}
        </div>
      </Container>
      {popularMovies.length !== 0 && (
        <Pagination
          page={page}
          totalPages={totalPagesPopMovie}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
};

export default PopularMovies;
