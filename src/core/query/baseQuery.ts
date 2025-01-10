import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.API_BASE_URL}/`,
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${process.env.TMDB_API_TOKEN}`);
    return headers;
  },
});
