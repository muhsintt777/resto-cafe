import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const DATA_URL = "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099";

const initialState = {
  data: [],
  status: "idle", //"loading", success, failed
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllData = (state) => state.data.data;

export const getDataError = (state) => state.data.error;
export const getDataStatus = (state) => state.data.status;

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(DATA_URL);
  return response.data[0].table_menu_list;
});

export default dataSlice.reducer;
