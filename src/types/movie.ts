export type MovieProps = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieCardProps = {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
};

export type MovieResponse = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};
