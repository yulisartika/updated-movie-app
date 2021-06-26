import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Button, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import CarouselHome from "../../components/CarouselHome";
import GenreButtons from "../../components/GenreButtons";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import {
  getMovies,
  getGenre,
  getMoviesByGenreId,
} from "../../redux/actions/movieAction";
import noImageFound from "../../assets/no_image_found.png";

function Home() {
  const [genreId, setGenreId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { allMovies, totalPages, genres, currentPage } = useSelector(
    (state) => state.movies
  );

  const handleChangePage = (pg) => {
    setPage(pg);
    dispatch(getMovies(pg));
  };

  useEffect(() => {
    setIsLoading(true);
    dispatch(getMovies(page));
    dispatch(getGenre());
    setIsLoading(false);
  }, [dispatch, page]);

  const handleAllMovies = () => {
    setGenreId(0);
    dispatch(getMovies());
  };

  const handleGetMovieByGenre = (id) => {
    setGenreId(id);
    dispatch(getMoviesByGenreId(id));
    console.log(allMovies);
  };

  console.log("ini di page", currentPage);

  return (
    <>
      <CarouselHome />
      <Container className="mt-5 mb-5">
        <div className="my-5 btn-genres">
          <Button
            className={` mr-2 mt-2 ${
              genreId === 0 ? "secondary" : "genre-button"
            }`}
            onClick={handleAllMovies}
          >
            All
          </Button>

          {genres.length !== 0 &&
            genres.map((item) => (
              <GenreButtons
                genreId={genreId}
                id={item.id}
                genreName={item.name}
                handleGetMovieByGenre={handleGetMovieByGenre}
              />
            ))}
        </div>

        <h1>Now Playing</h1>
        <div className="movies-list">
          {allMovies.length !== 0 ? (
            allMovies.map((item, index) => (
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
        totalPages={totalPages}
        handleChangePage={handleChangePage}
      />
      {/* another pagination with only prev and next */}
      {/* <AnotherPagination currentPage={currentPage} totalPages={totalPages} /> */}
    </>
  );
}

export default Home;
