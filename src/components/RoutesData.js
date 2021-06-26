import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import PopularTvShows from "../pages/PopularTvShows";
import PopularMovies from "../pages/PopularMovies";
import SearcPage from "../pages/SearchPage";
import TvShows from "../pages/TvShows";

export const RoutesData = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/tv-shows",
    component: TvShows,
    exact: true,
  },
  {
    path: "/popular-movies",
    component: PopularMovies,
    exact: true,
  },
  {
    path: "/popular-shows",
    component: PopularTvShows,
    exact: true,
  },
  {
    path: "/search-page",
    component: SearcPage,
    exact: true,
  },
  {
    path: "/movie-detail/:id",
    component: MovieDetail,
    exact: true,
  },
];
