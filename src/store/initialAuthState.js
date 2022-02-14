import { createSlice } from "@reduxjs/toolkit";

export const initialAuthState = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
