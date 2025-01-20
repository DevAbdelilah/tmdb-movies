"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import type { Movie } from "@/core/query/movies/types";

interface FeaturedMovieProps {
  featuredMovie: Movie;
}

function FeaturedMovie({ featuredMovie }: FeaturedMovieProps) {
  const getPosterUrl = (path: string) => {
    if (!path) return "";

    return `https://image.tmdb.org/t/p/original${path}`;
  };
  return (
    <Stack
      sx={{
        position: "relative",
        width: "100%",
        height: "1000px",
        backgroundImage: `url(${getPosterUrl(featuredMovie?.poster_path)})`,
        backgroundSize: "cover",
        borderRadius: "8px",
      }}
    >
      <Stack
        gap={4}
        sx={{
          position: "relative",
          zIndex: 2,
          padding: "4rem",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <Button
          startIcon={<PlayArrowIcon />}
          size="medium"
          sx={{
            width: "150px",
            color: "black",
            backgroundColor: "gray",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
            },
          }}
        >
          {featuredMovie.title}
        </Button>
        <Typography
          fontSize={26}
          fontWeight={800}
          sx={{
            color: "black",
            maxWidth: "50%",
          }}
        >
          {featuredMovie.overview}
        </Typography>
        <Stack direction={"row"} gap={6}>
          <Typography
            fontSize={20}
            fontWeight={800}
            color="black"
            alignItems={"center"}
            gap={2}
            sx={{ display: "flex" }}
          >
            <StarIcon sx={{ color: "warning.main" }} />{" "}
            {featuredMovie.vote_average}
          </Typography>
          <Typography color="black" fontSize={20} fontWeight={800}>
            {featuredMovie.release_date}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default FeaturedMovie;
