import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMovieFromServer = createAsyncThunk(
  "Movies/getMovieFromServer",
  async () => {
    try {
      const res = await fetch("/filmokio/Data.json");
      const data = res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const MovieSlice = createSlice({
  name: "Movies",
  initialState: { AllMovies: [], isLoading: false, isreject: false },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMovieFromServer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieFromServer.fulfilled, (state, action) => {
      state.AllMovies = action.payload.Movies;

      state.isLoading = false;
    });
    builder.addCase(getMovieFromServer.rejected, (state, action) => {
      state.isreject = true;
    });
  },
});

export default MovieSlice.reducer;
