import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getSales from "../../services/api";

const initialState = [];

export const getSalesData = createAsyncThunk("sales/getDataSales", async () => {
  try {
    const res = await getSales();
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const salesSlice = createSlice({
  name: "sales",
  initialState,
  // reducers: {

  // },
  extraReducers: {
    [getSalesData.fulfilled]: (state, action) => {
      return [...action.payload];
    },
  },
});

const { reducer } = salesSlice;
export default reducer;
