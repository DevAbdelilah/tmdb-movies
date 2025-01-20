"use client";

import { useGetPopularMoviesQuery } from "@/core/query/movies";
import Stack from "@mui/material/Stack";
import FeaturedMovies from "../Movies/FeaturedMovies";
import CarouselSection from "../Common/CarouselSection";

function HeroSection() {
  const { data: popularMovies } = useGetPopularMoviesQuery(1);

  return (
    <Stack position={"relative"}>
      <CarouselSection>
        {popularMovies?.results && popularMovies?.results.length > 0 && (
          <FeaturedMovies
            featuredMovie={popularMovies?.results[0]!}
            key={popularMovies?.results[0].id}
          />
        )}
      </CarouselSection>
    </Stack>
  );
}

export default HeroSection;
