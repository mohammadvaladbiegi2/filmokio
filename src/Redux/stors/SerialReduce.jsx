import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSerialFromServer = createAsyncThunk(
  "Serial/getSerialFromServer",
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

const SerialSlice = createSlice({
  name: "Serial",
  initialState: { AllSerial: [], isLoading: false, isreject: false },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSerialFromServer.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getSerialFromServer.fulfilled, (state, action) => {
      state.AllSerial = action.payload.Serials;
      state.isLoading = false;
    });
    builder.addCase(getSerialFromServer.rejected, (state, action) => {
      state.isreject = true;
    });
  },
});

export default SerialSlice.reducer;
