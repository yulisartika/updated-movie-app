import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Container } from "reactstrap";

import { image_baseUrl } from "../../api/API";
import MovieCard from "../../components/MovieCard";
import { getMoviesBySearch } from "../../redux/actions/movieAction";
import noImageFound from "../../assets/no_image_found.png";

function SearcPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { searchMovie } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getMoviesBySearch());
    setIsLoading(false);
  }, [dispatch]);

  return (
    <Container className="mt-5">
      <h1>{searchMovie.length} Result(s)</h1>
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
              />
            </div>
          ))
        ) : (
          <>{isLoading ? <Spinner color="danger" /> : "No Results"}</>
        )}
      </div>
    </Container>
  );
}

export default SearcPage;
