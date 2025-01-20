"use client";

import Card from "@mui/material/Card";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { Movie } from "@/core/query/movies/types";

interface Props {
  movie: Movie;
}

function MovieItem({ movie }: Props) {
  const getPosterUrl = (path: string) => {
    if (!path) return "";
    return `https://image.tmdb.org/t/p/original${path}`;
  };

  return (
    <Card
      sx={{
        width: 300,
        height: 600,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "inherit",
        "&:hover": {
          transform: "scale(1.03)",
          transition: "transform 0.2s ease-in-out",
        },
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Stack
          style={{
            height: 400,
            width: "100%",
            overflow: "hidden",
          }}
        >
          <img
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Stack>

        <Stack
          spacing={1}
          color={"#696969"}
          sx={{
            px: 2,
            pb: 2,
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              lineHeight: 1.2,
            }}
          >
            {movie.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {movie.overview}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            sx={{ mt: "auto" }}
          >
            <StarIcon sx={{ color: "warning.main" }} />
            <Typography variant="body2">
              {movie.vote_average.toFixed(1)}
            </Typography>
            <Typography pl={4}>{movie.release_date}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

export default MovieItem;
