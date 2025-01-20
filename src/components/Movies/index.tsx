"use client";

import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import {
  useGetPopularMoviesQuery,
  useSearchMoviesQuery,
} from "@/core/query/movies";
import { useDebounce } from "@/components/Hooks/useDebounce";
import { useAppSelector } from "@/core/store/hooks";

import MoviesCarousel from "./MoviesCarousel";
import FeaturedMovies from "./FeaturedMovies";
import { ClientProvider } from "@/components/ClientOnlyProvider";

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
          <Stack gap={9}>
            <FeaturedMovies
              featuredMovie={featuredMovie}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
              getPosterUrl={getPosterUrl}
            />

            <Stack
              gap={4}
              sx={{ position: "relative", width: "100%", overflow: "hidden" }}
            >
              <MoviesCarousel
                title="Top Movies"
                handleMovieListPrevious={handleMovieListPrevious}
                handleMovieListNext={handleMovieListNext}
                visibleMovies={visibleMovies}
              />
              <MoviesCarousel
                title="Popular Movies"
                handleMovieListPrevious={handleMovieListPrevious}
                handleMovieListNext={handleMovieListNext}
                visibleMovies={visibleMovies}
              />
              <MoviesCarousel
                title="Trending TV-SHOWS"
                handleMovieListPrevious={handleMovieListPrevious}
                handleMovieListNext={handleMovieListNext}
                visibleMovies={visibleMovies}
              />
              <MoviesCarousel
                title="Upcoming Movies"
                handleMovieListPrevious={handleMovieListPrevious}
                handleMovieListNext={handleMovieListNext}
                visibleMovies={visibleMovies}
              />

              {/* <Stack>
                <Typography fontSize={40} fontWeight={500}>
                  Upcoming Movies
                </Typography>
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
              </Stack> */}
            </Stack>
          </Stack>
        )}
      </Stack>
    </ClientProvider>
  );
}
