import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}

if (!apiToken) {
  throw new Error("NEXT_PUBLIC_TMDB_API_TOKEN is not defined");
}

export const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers) => {
    // Make sure to use 'Bearer' with a space before the token
    headers.set("Authorization", `Bearer ${apiToken.trim()}`);
    // TMDB requires this header
    headers.set("accept", "application/json");
    return headers;
  },
});
