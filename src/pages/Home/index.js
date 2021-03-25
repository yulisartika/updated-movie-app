import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Row, Col, Button } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import CarouselHome from "../../components/CarouselHome";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import {
  getMovies,
  getGenre,
  getMoviesByGenreId,
} from "../../redux/actions/movieAction";

function Home() {
  const [genreId, setGenreId] = useState(0);

  const dispatch = useDispatch();
  const { allMovies, genres } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenre());
  }, [dispatch]);

  const handleAllMovies = () => {
    setGenreId(0);
    dispatch(getMovies());
  };

  const handleGetMovieByGenre = (id) => {
    setGenreId(id);
    dispatch(getMoviesByGenreId(id));
    console.log(allMovies);
  };

  return (
    <>
      <CarouselHome />

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
            <Button
              className={`mr-2 mt-2 ${
                genreId === item.id ? "secondary" : "genre-button"
              }`}
              key={item.id}
              onClick={() => handleGetMovieByGenre(item.id)}
            >
              {item.name}
            </Button>
          ))}
      </div>

      {allMovies.length !== 0 ? (
        <Row className="content-card-container">
          {allMovies.slice(0, allMovies.length - 2).map((item) => (
            <Col xs="6" sm="4" md="2" key={item.id} className="pb-3 movieCard">
              <MovieCard
                image={`${image_baseUrl}${item.poster_path}`}
                title={item.original_title}
                rating={item.vote_average / 2}
                vote={item.vote_count}
                overview={item.overview}
                release={item.release_date}
                forAge={item.adult}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Spinner
          style={{ width: "3rem", height: "3rem" }}
          color="danger"
          className="centered"
        />
      )}
      <Pagination />
    </>
  );
}

export default Home;
