import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from '../features/api/jsonPlaceholderApi';
import errorLogReducer from '../features/errorLog/errorLogSlice';

const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    errorLog: errorLogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export default store;
