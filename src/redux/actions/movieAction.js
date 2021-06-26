import axios from "axios";
import { baseUrl, api_key } from "../../api/API";
import {
  GET_GENRE,
  GET_MOVIES,
  GET_MOVIES_BY_GENRE_ID,
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

export const getMoviesBySearch = (keyword) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}search/movie?api_key=${api_key}&language=en-US&query=${keyword}`
    )
    .then((response) => {
      // console.log(response.data.results);
      dispatch({
        type: SEARCH_MOVIE,
        payload: response.data.results,
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
