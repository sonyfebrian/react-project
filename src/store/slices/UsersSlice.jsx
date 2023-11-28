import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "src/services/api";

const initialState = {
  usersData: [],
  loading: false,
  error: null,
};

export const getUsersData = createAsyncThunk("users/getDataUsers", async () => {
  try {
    const res = await ApiService.getUsers();
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsersData.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUsersData.fulfilled]: (state, action) => {
      state.loading = false;
      state.salesData = action.payload;
    },
    [getUsersData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
const { reducer } = usersSlice;
export default reducer;
