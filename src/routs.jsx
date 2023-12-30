import Artists from "./pages/Artists/Artists";
import Movie from "./pages/Movie/Movie";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Serial from "./pages/Serial/Serial";
import Weblog from "./pages/Weblog/Weblog";
import Homepage from "./pages/homepage/Homepage";

const routs = [
  { path: "/", element: <Homepage /> },
  { path: "/movie", element: <Movie /> },
  { path: "/movie/:id", element: <MovieDetails /> },
  { path: "/serial", element: <Serial /> },
  { path: "/artists", element: <Artists /> },
  { path: "/weblog", element: <Weblog /> },
];

export default routs;
