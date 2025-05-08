import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
