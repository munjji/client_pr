import type { MovieProps } from "../../types/movie";
import MovieCard from "./MovieCard";

interface MovieArrayProps {
  movies: MovieProps[];
}

const Movie = ({ movies }: MovieArrayProps) => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default Movie;
