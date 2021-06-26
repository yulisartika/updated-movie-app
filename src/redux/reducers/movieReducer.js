import {
  GET_GENRE,
  GET_MOVIES,
  GET_MOVIES_BY_GENRE_ID,
  GET_MOVIE_DETAIL,
  GET_MOVIE_REVIEWS,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIE,
} from "../types/movie";

const initialState = {
  allMovies: [],
  genres: [],
  searchMovie: [],
  totalPages: null,
  currentPage: null,
  popularMovies: [],
  totalPagesPopMovie: null,
  currentPagePopMovie: null,
  totalSearchPages: null,
  totalSearchResults: null,
  keyword: "",
  movieDetail: null,
  movieReviews: [],
};

const movieReducer = (state = initialState, action) => {
  const {
    type,
    payload,
    totalPages,
    currentPage,
    totalPagesPopMovie,
    currentPagePopMovie,
    totalSearchPages,
    totalSearchResults,
    keyword,
  } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        allMovies: payload,
        totalPages: totalPages,
        currentPage: currentPage,
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
        totalSearchPages: totalSearchPages,
        totalSearchResults: totalSearchResults,
        keyword: keyword,
      };
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: payload,
        totalPagesPopMovie: totalPagesPopMovie,
        currentPagePopMovie: currentPagePopMovie,
      };
    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: payload,
      };
    case GET_MOVIE_REVIEWS:
      return {
        ...state,
        movieReviews: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
