import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Movies from "../pages/Movies";
import NowPlaying from "../pages/NowPlaying";
import Popular from "../pages/Popular";
import SearcPage from "../pages/SearchPage";
import Serials from "../pages/Serials";

export const RoutesData = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/movies",
    component: Movies,
    exact: true
  },
  {
    path: "/serials",
    component: Serials,
    exact: true
  },
  {
    path: "/popular",
    component: Popular,
    exact: true
  },
  {
    path: "/now-playing",
    component: NowPlaying,
    exact: true
  },
  {
    path: "/search-page",
    component: SearcPage,
    exact: true
  },
  {
    path: "/movie-detail/:id",
    component: MovieDetail,
    exact: true
  }
];
