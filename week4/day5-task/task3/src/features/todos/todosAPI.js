import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosAPI = createApi({
  reducerPath: "todosAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosAPI;
