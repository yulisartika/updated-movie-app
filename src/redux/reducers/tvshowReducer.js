import { GET_POPULAR_TV_SHOWS, GET_TV_SHOWS } from "../types/tvshows";

const initialState = {
  airingTvShows: [],
  tvShowsTotalPages: null,
  tvShowsCurrentPage: null,
  popularTvShows: [],
  popTvShowsTotalPages: null,
  popTvShowCurrentPage: null,
};

const tvShowsReducer = (state = initialState, action) => {
  const {
    type,
    payload,
    tvShowsTotalPages,
    tvShowsCurrentPage,
    popTvShowsTotalPages,
    popTvShowCurrentPage,
  } = action;
  switch (type) {
    case GET_TV_SHOWS:
      return {
        ...state,
        airingTvShows: payload,
        tvShowsTotalPages: tvShowsTotalPages,
        tvShowsCurrentPage: tvShowsCurrentPage,
      };
    case GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        popularTvShows: payload,
        popTvShowsTotalPages: popTvShowsTotalPages,
        popTvShowCurrentPage: popTvShowCurrentPage,
      };
    default:
      return {
        ...state,
      };
  }
};

export default tvShowsReducer;
