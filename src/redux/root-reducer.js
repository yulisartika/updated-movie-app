import { combineReducers } from "redux";
import movieReducer from "./reducers/movieReducer";
import tvShowsReducer from "./reducers/tvshowReducer";

export default combineReducers({
  movies: movieReducer,
  tvShows: tvShowsReducer,
});
