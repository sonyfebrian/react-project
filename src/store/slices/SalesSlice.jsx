import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "src/services/api";

export const getSalesData = createAsyncThunk("sales/getDataSales", async () => {
  try {
    const res = await ApiService.getSales();
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const initialState = {
  salesData: [],
  loading: false,
  error: null,
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSalesData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSalesData.fulfilled, (state, action) => {
        state.loading = false;
        state.salesData = action.payload;
      })
      .addCase(getSalesData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: salesReducer } = salesSlice;
export default salesSlice;
