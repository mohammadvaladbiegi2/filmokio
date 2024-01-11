import { configureStore } from "@reduxjs/toolkit";
import MoviesReduce from "./stors/MoviesReduce";
import SerialReduce from "./stors/SerialReduce";
import ArtistReduce from "./stors/ArtistsReduce";

const store = configureStore({
  reducer: {
    Movies: MoviesReduce,
    Serial: SerialReduce,
    Artist: ArtistReduce,
  },
});

export default store;
