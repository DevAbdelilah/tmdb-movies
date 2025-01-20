import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import MovieItem from "@/components/Movies/MovieItem";
import type { Movie } from "@/core/query/movies/types";

interface PopularTvShowsProps {
  title: string;
  handleMovieListPrevious: () => void;
  handleMovieListNext: () => void;
  visibleMovies: Movie[];
}

export default function MoviesCarousel({
  handleMovieListPrevious,
  handleMovieListNext,
  visibleMovies,
  title,
}: PopularTvShowsProps) {
  return (
    <Stack>
      <Typography fontSize={40} fontWeight={500}>
        {title}
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
    </Stack>
  );
}
