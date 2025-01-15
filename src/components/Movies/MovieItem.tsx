"use client";

import type { Movie } from "@/core/query/movies/types";
import { Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: Movie;
}

function MovieItem({ movie }: Props) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/${movie.poster_path}`
    : "/placeholder-image.jpg";
  return <Stack></Stack>;
  return <Link href={`/movies/${movie.title}`}>{movie.title}</Link>;
}

export default MovieItem;
