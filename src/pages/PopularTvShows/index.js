import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";
import { useLocation } from "react-router-dom";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import noImageFound from "../../assets/no_image_found.png";
import { getPopularTvShows } from "../../redux/actions/tvShowsAction";

const PopularTvShows = () => {
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    dispatch(getPopularTvShows(page));
    setIsLoading(false);
  }, [dispatch, page]);

  // console.log(popularTvShows);
  // console.log(popTvShowsTotalPages);
  // console.log(popTvShowCurrentPage);

  const location = useLocation();
  console.log(location);

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
                  // forAge={item.adult}
                />
              </div>
            ))
          ) : (
            <>{isLoading ? <Spinner color="danger" /> : "No Results"}</>
          )}
        </div>
      </Container>
      <Pagination
        page={page}
        totalPages={popTvShowsTotalPages}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default PopularTvShows;
