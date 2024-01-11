import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getFrequentlyaskFromServer = createAsyncThunk(
  "Frequentlyask/getFrequentlyaskFromServer",
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

const FrequentlyaskSlice = createSlice({
  name: "Frequentlyask",
  initialState: [],
  reducers: {
    showhandel: (state, action) => {
      const { id } = action.payload;
      state.forEach((item) => {
        if (item.id === id) {
          item.show = !item.show;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getFrequentlyaskFromServer.fulfilled, (state, action) => {
      return action.payload.Frequentlyaskedquestions;
    });
  },
});
export const { showhandel } = FrequentlyaskSlice.actions;
export default FrequentlyaskSlice.reducer;
