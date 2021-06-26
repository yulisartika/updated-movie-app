import axios from "axios";
import { baseUrl, api_key } from "../../api/API";
import {
  GET_GENRE,
  GET_MOVIES,
  GET_MOVIES_BY_GENRE_ID,
  GET_MOVIE_DETAIL,
  GET_MOVIE_REVIEWS,
  GET_POPULAR_MOVIES,
  SEARCH_MOVIE,
} from "../types/movie";

export const getMovies = (page) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}movie/now_playing?api_key=${api_key}&language=en-US&page=${page}`
    )
    .then((response) => {
      // console.log(response.data.total_pages);
      dispatch({
        type: GET_MOVIES,
        payload: response.data.results,
        totalPages: response.data.total_pages,
        currentPage: response.data.page,
      });
    })
    .catch((err) => alert(err));
};

export const getGenre = () => (dispatch) => {
  return axios
    .get(`${baseUrl}genre/movie/list?api_key=${api_key}&language=en-US`)
    .then((response) => {
      dispatch({
        type: GET_GENRE,
        payload: response.data.genres,
      });
    })
    .catch((err) => alert(err));
};

export const getMoviesByGenreId = (id) => (dispatch) => {
  return axios
    .get(`${baseUrl}discover/movie?api_key=${api_key}&with_genres=${id}`)
    .then((response) => {
      dispatch({
        type: GET_MOVIES_BY_GENRE_ID,
        payload: response.data.results,
      });
    })
    .catch((err) => alert(err));
};

export const getMoviesAndShowsBySearch = (keyword, page) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}search/multi?api_key=${api_key}&language=en-US&query=${keyword}&page=${page}`
    )
    .then((response) => {
      // console.log(response.data.results);
      dispatch({
        type: SEARCH_MOVIE,
        payload: response.data.results,
        totalSearchPages: response.data.total_pages,
        totalSearchResults: response.data.total_results,
        keyword: keyword,
      });
    })
    .catch((err) => alert(err));
};

export const getPopularMovies = (page) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}movie/popular?api_key=${api_key}&language=en-US&page=${page}`
    )
    .then((response) => {
      // console.log(response.data.results);
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: response.data.results,
        totalPagesPopMovie: response.data.total_pages,
        currentPagePopMovie: response.data.page,
      });
    })
    .catch((err) => alert(err));
};

export const getMovieDetail = (id) => (dispatch) => {
  return axios
    .get(`${baseUrl}movie/${id}?api_key=${api_key}&language=en-US`)
    .then((response) => {
      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: response.data,
      });
    });
};

// do make page as params later
export const getMovieReviews = (id) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
    )
    .then((response) => {
      dispatch({
        type: GET_MOVIE_REVIEWS,
        payload: response.data.results,
      });
    });
};
