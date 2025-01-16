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
  const [currentPage, setCurrentPage] = useState(0);
  const moviesPerPage = 4;

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

  const handleMovieListPrevious = () => {
    setCurrentPage((prev) => {
      if (prev === 0) {
        return Math.floor((movies?.length || 0) / moviesPerPage) - 1;
      }
      return prev - 1;
    });
  };

  const handleMovieListNext = () => {
    setCurrentPage((prev) => {
      const maxPages = Math.floor((movies?.length || 0) / moviesPerPage);
      if (prev >= maxPages - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const featuredMovie = movies?.[randomMovieIndex] || movies?.[0];

  const getCurrentMovies = () => {
    if (!movies) return [];
    const startIndex = currentPage * moviesPerPage;
    return movies.slice(startIndex, startIndex + moviesPerPage);
  };

  const visibleMovies = getCurrentMovies();

  return (
    <ClientProvider>
      <Stack direction={"row"} alignItems={"center"} gap={2}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Stack gap={5}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "1000px",
                backgroundImage: featuredMovie?.poster_path
                  ? `url(${getPosterUrl(featuredMovie.poster_path)})`
                  : "none",
                backgroundSize: "cover",
                borderRadius: "8px",
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
                  width: "1400px",
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
                    alignItems={"center"}
                    gap={2}
                    sx={{ display: "flex" }}
                  >
                    <StarIcon sx={{ color: "warning.main" }} />{" "}
                    {featuredMovie?.vote_average}
                  </Typography>
                  <Typography fontSize={20} fontWeight={400}>
                    {featuredMovie?.release_date}
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Typography fontSize={40} fontWeight={500}>
              Top Movies
            </Typography>

            <Box
              sx={{ position: "relative", width: "100%", overflow: "hidden" }}
            >
              <Stack
                direction={"row"}
                justifyContent={"center"}
                flexWrap={"nowrap"}
                gap={3}
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  transform: `translateX(0)`,
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    position: "absolute",
                    pt: 22,
                    zIndex: 3,
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <IconButton
                    onClick={handleMovieListPrevious}
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
                    onClick={handleMovieListNext}
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
                {visibleMovies.map((movie) => (
                  <MovieItem key={movie.id} movie={movie} />
                ))}
              </Stack>
            </Box>
          </Stack>
        )}
      </Stack>
    </ClientProvider>
  );
}
