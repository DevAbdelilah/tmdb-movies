"use client";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "@/core/query/movies";
import { useDebounce } from "@/components/Hooks/useDebounce";
import { useAppSelector } from "@/core/store/hooks";
import MovieItem from "@/components/Movies/MovieItem";
import { ClientProvider } from "../ClientOnlyProvider";

export default function MoviesList() {
  const searchTerm = useAppSelector((state) => state.movies.searchTerm);
  const debouncedSearch = useDebounce(searchTerm, 500);

  const {
    data: searchData,
    isLoading: searchLoading,
    isFetching: searchFetching,
  } = useSearchMoviesQuery(
    { query: debouncedSearch, page: 1 },
    { skip: !debouncedSearch }
  );

  const {
    data: popularData,
    isLoading: popularLoading,
    isFetching: popularFetching,
  } = useGetPopularMoviesQuery(1, {
    skip: !!debouncedSearch,
  });

  const movies = searchTerm ? searchData?.results : popularData?.results;
  const isLoading = searchLoading || popularLoading;
  const isFetching = searchFetching || popularFetching;

  return (
    <ClientProvider>
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack gap={9}>
            <Stack>
              <Typography fontSize={40} fontWeight={600}>
                Most Popular
              </Typography>
              <Typography fontSize={18} fontWeight={400} sx={{ opacity: 0.8 }}>
                The people have spoken! See the most-watched movies on
                StreamVid!
              </Typography>
            </Stack>
            <Stack direction={"row"} flexWrap={"wrap"} gap={8}>
              {movies?.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </ClientProvider>
  );
}
