import type { MovieProps, MovieResponse } from "../types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie/Movie";
import { useParams } from "react-router-dom";

const MoviesPage = () => {
  const { movieCategory } = useParams();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(movieCategory);
      const { data } = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/${movieCategory}?language=ko-KR&page=1`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJkMDJlMTJiMjUyNjliMzJhOWZhOWUwZDdmNzAxZSIsIm5iZiI6MTY5Njg2NjkzNy40NTksInN1YiI6IjY1MjQyMjc5ZmQ2MzAwMDBjNTY5NzA5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yJDXC4THhoaZU7QjXxBIeJ3tBOqXxjt6oPFeKr2HrU`,
          },
        }
      );
      console.log(data);
      setMovies(data.results);
    };

    fetchMovies();
  }, [movieCategory]);

  return (
    <div className="flex flex-row justify-center items-center">
      <Movie movies={movies} />
    </div>
  );
};

export default MoviesPage;
