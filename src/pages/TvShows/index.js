import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import noImageFound from "../../assets/no_image_found.png";
import { getAiringTvShows } from "../../redux/actions/tvShowsAction";

const TvShows = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { airingTvShows, tvShowsTotalPages, tvShowsCurrentPage } = useSelector(
    (state) => state.tvShows
  );

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getAiringTvShows(pg));
  };

  useEffect(() => {
    dispatch(getAiringTvShows(page));
  }, [dispatch, page]);

  // console.log(airingTvShows);
  // console.log(tvShowsTotalPages);
  console.log(tvShowsCurrentPage);

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1>TV Airing Today</h1>
        <div className="movies-list">
          {airingTvShows.length !== 0 ? (
            airingTvShows.map((item) => (
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
      {airingTvShows.length !== 0 && (
        <Pagination
          page={page}
          totalPages={tvShowsTotalPages}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
};

export default TvShows;
