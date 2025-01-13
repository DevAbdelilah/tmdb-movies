"use client";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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

  const getPosterUrl = (path: string) => {
    if (!path) return "";
    return `https://image.tmdb.org/t/p/original${path}`;
  };

  return (
    <ClientProvider>
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack gap={10} sx={{ width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "800px",
                backgroundImage:
                  movies && movies[1]?.poster_path
                    ? `url(${getPosterUrl(movies[1].poster_path)})`
                    : "none",
                backgroundSize: "cover",

                borderRadius: "8px",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8))",
                  zIndex: 1,
                },
              }}
            >
              <Stack
                gap={10}
                sx={{
                  position: "relative",
                  zIndex: 2,
                  padding: "2rem",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  size="medium"
                  sx={{
                    width: "150px",
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  {movies && movies[1]?.title}
                </Button>
                <Typography
                  fontSize={18}
                  fontWeight={400}
                  sx={{
                    color: "white",
                    opacity: 0.8,
                    maxWidth: "50%",
                  }}
                >
                  {movies && movies[1]?.overview}
                </Typography>
              </Stack>
            </Box>
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
