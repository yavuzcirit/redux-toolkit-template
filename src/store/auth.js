import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthanticated: false,
};

const authSlice = createSlice({
  name: "authantication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthanticated = true;
    },
    logout(state) {
      state.isAuthanticated = false;
    },
  },
});

export default authSlice;
