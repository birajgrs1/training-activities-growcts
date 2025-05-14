import { configureStore } from "@reduxjs/toolkit";
import { todosAPI } from "../features/todos/todosAPI";

export const store = configureStore({
  reducer: {
    [todosAPI.reducerPath]: todosAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAPI.middleware),
});  

