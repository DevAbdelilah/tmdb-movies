import axios from "axios";
import { useState } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";

interface Movie {
  id: number;
  title: string;
}

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      });
      setMovies(response.data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return { movies, loading, fetchMovies };
};
