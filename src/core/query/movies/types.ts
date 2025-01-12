// Types for API responses
export interface Movie {
    id: number;
    title: string;
    poster_path: string | null;
    overview: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface MovieResponse {
    results: Movie[];
    page: number;
    total_pages: number;
    total_results: number;
  }
  