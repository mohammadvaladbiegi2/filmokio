import { configureStore } from "@reduxjs/toolkit";
import MoviesReduce from "./stors/MoviesReduce";
import SerialReduce from "./stors/SerialReduce";
import ArtistReduce from "./stors/ArtistsReduce";
import WeblogsReduce from "./stors/WeblogsReduce";
import FrequentlyaskReduce from "./stors/Frequentlyask";

const store = configureStore({
  reducer: {
    Movies: MoviesReduce,
    Serial: SerialReduce,
    Artist: ArtistReduce,
    Weblogs: WeblogsReduce,
    Frequentlyask: FrequentlyaskReduce,
  },
});

export default store;
