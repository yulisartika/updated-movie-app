import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { getPopularMovies } from "../../redux/actions/movieAction";
import noImageFound from "../../assets/no_image_found.png";

const Popular = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  //const [popMovie, setPopMovie] = useState([]);

  const dispatch = useDispatch();
  const { popularMovies, totalPagesPopMovie } = useSelector(
    (state) => state.movies
  );

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getPopularMovies(pg));
  };

  useEffect(() => {
    // axios
    //   .get(
    //     `https://api.themoviedb.org/3/movie/popular?api_key=834c193ca1db3c5318aaf7d115b90231&language=en-US&page=1`
    //   )
    //   .then((res) => setPopMovie(res.data.results));
    setIsLoading(true);
    dispatch(getPopularMovies(page));
    setIsLoading(false);
  }, [dispatch, page]);

  console.log("popular page", popularMovies);
  // console.log(popularMovies.results);
  // totalPagesPopMovie: null,
  // currentPagePopMovie: null,

  return (
    <>
      <Container className="mt-5 mb-5">
        <h1>Popular Movies</h1>
        <div className="movies-list">
          {popularMovies.length !== 0 ? (
            popularMovies.map((item, index) => (
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
        totalPages={totalPagesPopMovie}
        handleChangePage={handleChangePage}
      />
    </>
  );
};

export default Popular;
