import {
  GET_GENRE,
  GET_MOVIES,
  GET_MOVIES_BY_GENRE_ID,
  SEARCH_MOVIE,
} from "../types/movie";

const initialState = {
  allMovies: [],
  genres: [],
  searchMovie: [],
  totalPages: null,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload, totalPages } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        allMovies: payload,
        totalPages: totalPages,
      };
    case GET_GENRE:
      return {
        ...state,
        genres: payload,
      };
    case GET_MOVIES_BY_GENRE_ID:
      return {
        ...state,
        allMovies: payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        searchMovie: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
