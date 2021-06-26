import Home from "../pages/Home";
import PopularTvShows from "../pages/PopularTvShows";
import Popular from "../pages/Popular";
import TvShows from "../pages/TvShows";

export const NavbarData = [
  {
    title: "Movies",
    path: "/",
    component: Home,
    exact: true,
  },
  {
    title: "Popular Movies",
    path: "/popular-movies",
    component: Popular,
    exact: true,
  },
  {
    title: "TV Shows",
    path: "/tv-shows",
    component: TvShows,
    exact: true,
  },
  {
    title: "Popular Shows",
    path: "/popular-shows",
    component: PopularTvShows, // ini buat home aja nnti dihapus
    exact: true,
  },
];
