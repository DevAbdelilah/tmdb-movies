"use client";

import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "@/core/query/movies";
import { useDebounce } from "@/components/Hooks/useDebounce";
import { useAppSelector } from "@/core/store/hooks";
import MovieItem from "@/components/Movies/MovieItem";
import { ClientProvider } from "../ClientOnlyProvider";

export default function MoviesList() {
  const [randomMovieIndex, setRandomMovieIndex] = useState(0);
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

  const generateRandomIndex = (moviesArray: string | any[]) => {
    if (!moviesArray || moviesArray.length === 0) return 0;
    return Math.floor(Math.random() * moviesArray.length);
  };

  useEffect(() => {
    if (movies && movies.length > 0) {
      setRandomMovieIndex(generateRandomIndex(movies));
    }
  }, [movies]);
  const handlePrevious = () => {
    if (movies && movies.length > 0) {
      setRandomMovieIndex((prev) =>
        prev === 0 ? movies.length - 1 : prev - 1
      );
    }
  };

  const handleNext = () => {
    if (movies && movies.length > 0) {
      setRandomMovieIndex((prev) =>
        prev === movies.length - 1 ? 0 : prev + 1
      );
    }
  };

  const featuredMovie = movies?.[randomMovieIndex] || movies?.[0];

  return (
    <ClientProvider>
      <Stack direction={"row"} alignItems={"center"} gap={4}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack gap={10}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "800px",
                backgroundImage: featuredMovie?.poster_path
                  ? `url(${getPosterUrl(featuredMovie.poster_path)})`
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
                direction="row"
                sx={{
                  position: "absolute",

                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 3,
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                <IconButton
                  onClick={handlePrevious}
                  sx={{
                    color: "white",

                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <ChevronLeftIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </Stack>
              <Stack
                gap={6}
                sx={{
                  position: "relative",
                  zIndex: 2,
                  padding: "4rem",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  startIcon={<PlayArrowIcon />}
                  size="medium"
                  sx={{
                    width: "150px",
                    color: "white",
                    backgroundColor: "gray",
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.7)",
                    },
                  }}
                >
                  {featuredMovie?.title}
                </Button>
                <Typography
                  fontSize={20}
                  fontWeight={600}
                  sx={{
                    color: "white",
                    opacity: 0.8,
                    maxWidth: "50%",
                  }}
                >
                  {featuredMovie?.overview}
                </Typography>
                <Stack direction={"row"} gap={6}>
                  <Typography
                    fontSize={20}
                    fontWeight={400}
                    gap={2}
                    sx={{ display: "flex" }}
                  >
                    <StarIcon /> {featuredMovie?.vote_average}
                  </Typography>
                  <Typography fontSize={20} fontWeight={400}>
                    {featuredMovie?.release_date}
                  </Typography>
                </Stack>
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
