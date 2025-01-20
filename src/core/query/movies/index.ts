import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@/core/query/baseQuery";
import { Movie, MovieResponse } from "./types";

// Define tags for caching
export const MOVIE_API_REDUCER_KEY = "movieApi";

export const movieApi = createApi({
  reducerPath: MOVIE_API_REDUCER_KEY,
  baseQuery,
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getPopularMovies: builder.query<MovieResponse, number>({
      query: (page = 1) => ({
        url: `/movie/popular`,
        params: { page },
      }),
      providesTags: ["Movies"],
    }),

    getTrendingMovies: builder.query<MovieResponse, string>({
      query: (timeWindow = "day") => ({
        url: `/trending/movie/${timeWindow}`,
      }),
      providesTags: ["Movies"],
    }),

    searchMovies: builder.query<
      MovieResponse,
      { query: string; page?: number }
    >({
      query: ({ query, page = 1 }) => ({
        url: "/search/movie",
        params: {
          query,
          page,
          include_adult: false,
        },
      }),
      providesTags: ["Movies"],
    }),

    getMovieDetails: builder.query<Movie, number>({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
      }),
      providesTags: ["Movies"],
    }),
    getUpcomingMovies: builder.query<MovieResponse, number>({
      query: (page = 1) => ({
        url: `/movie/upcoming`,
        params: { page },
      }),
      providesTags: ["Movies"],
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetPopularMoviesQuery,
  useGetTrendingMoviesQuery,
  useSearchMoviesQuery,
  useGetMovieDetailsQuery,
} = movieApi;
