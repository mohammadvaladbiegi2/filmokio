import React, { lazy, Suspense } from "react";

// Lazy import components
const Artists = lazy(() => import("./pages/Artists/Artists"));
const Movie = lazy(() => import("./pages/Movie/Movie"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const Serial = lazy(() => import("./pages/Serial/Serial"));
const VeblogPageDetails = lazy(() =>
  import("./pages/VeblogPageDetails/VeblogPageDetails")
);
const VeblogPage = lazy(() => import("./pages/Weblog/VeblogPage"));
const Homepage = lazy(() => import("./pages/homepage/Homepage"));
import Loader from "./component/Loader/Loader";
const routes = [
  {
    path: "/filmokio/",
    element: (
      <Suspense fallback={<Loader />}>
        <Homepage />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/movie",
    element: (
      <Suspense fallback={<Loader />}>
        <Movie />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/movie/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <MovieDetails />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/serial",
    element: (
      <Suspense fallback={<Loader />}>
        <Serial />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/artists",
    element: (
      <Suspense fallback={<Loader />}>
        <Artists />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/veblog",
    element: (
      <Suspense fallback={<Loader />}>
        <VeblogPage />
      </Suspense>
    ),
  },
  {
    path: "/filmokio/veblog/:id",
    element: (
      <Suspense fallback={<Loader />}>
        <VeblogPageDetails />
      </Suspense>
    ),
  },
];

export default routes;
