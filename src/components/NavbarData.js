import Home from "../pages/Home";
import Movies from "../pages/Movies";
import NowPlaying from "../pages/NowPlaying";
import Popular from "../pages/Popular";
import Serials from "../pages/Serials";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    title: "Movies",
    path: "/movies",
    component: Movies,
    exact: true
  },
  {
    title: "Serials",
    path: "/serials",
    component: Serials,
    exact: true
  },
  {
    title: "Popular",
    path: "/popular",
    component: Popular,
    exact: true
  },
  {
    title: "Now Playing",
    path: "/now-playing",
    component: NowPlaying,
    exact: true
  },
];
