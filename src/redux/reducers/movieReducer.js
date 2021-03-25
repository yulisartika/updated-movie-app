import { GET_GENRE, GET_MOVIES, GET_MOVIES_BY_GENRE_ID } from "../types/movie";

const initialState = {
  allMovies: [],
  genres: [],
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        allMovies: payload,
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
    default:
      return state;
  }
};

export default movieReducer;
