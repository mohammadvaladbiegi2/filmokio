import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArtistFromServer = createAsyncThunk(
  "Artist/getArtistFromServer",
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

const ArtistSlice = createSlice({
  name: "Artist",
  initialState: { AllArtist: [], isLoading: false, isreject: false },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getArtistFromServer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getArtistFromServer.fulfilled, (state, action) => {
      state.AllArtist = action.payload.Artists;
      state.isLoading = false;
    });
    builder.addCase(getArtistFromServer.rejected, (state, action) => {
      state.isreject = true;
    });
  },
});

export default ArtistSlice.reducer;
