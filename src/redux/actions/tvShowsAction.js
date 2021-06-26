import axios from "axios";
import { api_key, baseUrl } from "../../api/API";
import { GET_POPULAR_TV_SHOWS, GET_TV_SHOWS } from "../types/tvshows";

export const getAiringTvShows = (page) => (dispatch) => {
  return axios
    .get(
      `${baseUrl}tv/airing_today?api_key=${api_key}&language=en-US&page=${page}`
    )
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_TV_SHOWS,
        payload: response.data.results,
        tvShowsTotalPages: response.data.total_pages,
        tvShowsCurrentPage: response.data.page,
      });
    })
    .catch((err) => alert(err));
};

export const getPopularTvShows = (page) => (dispatch) => {
  return axios
    .get(`${baseUrl}tv/popular?api_key=${api_key}&language=en-US&page=${page}`)
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_POPULAR_TV_SHOWS,
        payload: response.data.results,
        popTvShowsTotalPages: response.data.total_pages,
        popTvShowCurrentPage: response.data.page,
      });
    })
    .catch((err) => alert(err));
};
