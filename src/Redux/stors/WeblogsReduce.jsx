import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getWeblogsFromServer = createAsyncThunk(
  "Weblogs/getWeblogsFromServer",
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

const WeblogsSlice = createSlice({
  name: "Weblogs",
  initialState: { AllWeblogs: [], isLoading: false, isreject: false },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getWeblogsFromServer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getWeblogsFromServer.fulfilled, (state, action) => {
      state.AllWeblogs = action.payload.Weblogs;
      state.isLoading = false;
    });
    builder.addCase(getWeblogsFromServer.rejected, (state, action) => {
      state.isreject = true;
    });
  },
});

export default WeblogsSlice.reducer;
