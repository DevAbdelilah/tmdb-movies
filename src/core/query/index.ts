import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    // Get popular movies
  }),
});

export const {} = api;
