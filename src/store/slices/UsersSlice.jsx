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

export const createUser = createAsyncThunk("users/createUser", async () => {
  try {
    const res = await ApiService.createUser();
    return res.data;
  } catch (error) {
    throw new Error("Failed to create user");
  }
});

export const getUserDetails = createAsyncThunk(
  "users/getUserDetails",
  async (userId) => {
    try {
      const res = await ApiService.getUserDetails(userId);
      return res.data;
    } catch (error) {
      throw new Error("Failed to fetch user details");
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    try {
      const res = await ApiService.deleteUser(userId);
      return res.data;
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersData.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData = action.payload;
      })
      .addCase(getUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.usersData.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.loading = false;

        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;

      state.usersData = state.usersData.filter(
        (user) => user.id !== action.payload.userId
      );
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reducer: usersReducer } = usersSlice;
export default usersSlice;
