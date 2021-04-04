import React from "react";
import { Button } from "reactstrap";

function GenreButtons({ genreId, id, handleGetMovieByGenre, genreName }) {
  return (
    <Button
      className={`mr-2 mt-2 ${genreId === id ? "secondary" : "genre-button"}`}
      key={id}
      onClick={() => handleGetMovieByGenre(id)}
    >
      {genreName}
    </Button>
  );
}

export default GenreButtons;
