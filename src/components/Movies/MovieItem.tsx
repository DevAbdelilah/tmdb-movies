"use client";

import type { Movie } from "@/core/query/movies/types";
import Link from "next/link";

interface Props {
  movie: Movie;
}

function MovieItem({ movie }: Props) {
  return <Link href={`/movies/${movie.title}`}>{movie.title}</Link>;
}

export default MovieItem;
