import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "src/services/api";

const initialState = {
  salesData: [],
  loading: false,
  error: null,
};

export const getSalesData = createAsyncThunk("sales/getDataSales", async () => {
  try {
    const res = await ApiService.getSales();
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: {
    [getSalesData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getSalesData.fulfilled]: (state, action) => {
      state.loading = false;
      state.salesData = action.payload;
    },
    [getSalesData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
const { reducer } = salesSlice;
export default reducer;
