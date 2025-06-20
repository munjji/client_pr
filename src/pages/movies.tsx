import type { MovieProps, MovieResponse } from "../types/movie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie/Movie";

const MoviesPage = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    // 인기 순위 영화 불러오기
    const fetchMovies = async () => {
      const { data } = await axios.get<MovieResponse>(
        `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
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
  }, []);

  return (
    <div className="">
      <Movie movies={movies} />
    </div>
  );
};

export default MoviesPage;
