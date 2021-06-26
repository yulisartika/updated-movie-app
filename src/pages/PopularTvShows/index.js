import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";
// import { useLocation } from "react-router-dom";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import noImageFound from "../../assets/no_image_found.png";
import { getPopularTvShows } from "../../redux/actions/tvShowsAction";

const PopularTvShows = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { popularTvShows, popTvShowsTotalPages } = useSelector(
    (state) => state.tvShows
  );

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getPopularTvShows(pg));
  };

  useEffect(() => {
    dispatch(getPopularTvShows(page));
  }, [dispatch, page]);

  // const location = useLocation(); // to define the current active pathname location
  // console.log(location.pathname === "/popular-shows" ? "yes" : "salah");

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1>Popular Shows</h1>
        <div className="movies-list">
          {popularTvShows.length !== 0 ? (
            popularTvShows.map((item) => (
              <div className="movie-item" key={item.id}>
                <MovieCard
                  image={
                    item.poster_path !== null
                      ? `${image_baseUrl}${item.poster_path}`
                      : noImageFound
                  }
                  title={item.original_name}
                  rating={item.vote_average / 2}
                  vote={item.vote_count}
                  overview={item.overview}
                  release={item.first_air_date}
                  id={item.id}
                />
              </div>
            ))
          ) : (
            <Spinner color="danger" className="spinner" />
          )}
        </div>
      </Container>
      {popularTvShows.length !== 0 && (
        <Pagination
          page={page}
          totalPages={popTvShowsTotalPages}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
};

export default PopularTvShows;
