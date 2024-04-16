import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    dataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    dataSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    dataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    resetData: (state) => {
      state.data = null;
    }
  }
});

export const { dataStart, dataSuccess, dataFailure, resetData } = userSlice.actions;

export default userSlice.reducer;