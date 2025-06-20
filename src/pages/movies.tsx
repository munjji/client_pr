import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movie from "../components/Movie/Movie";
import type { MovieProps, MovieResponse } from "../types/movie";

const MoviesPage = () => {
  const { movieCategory } = useParams();
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get<MovieResponse>(
          `https://api.themoviedb.org/3/movie/${movieCategory}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer ...`,
            },
          }
        );
        setMovies(data.results);
      } catch (error) {
        console.error("영화 데이터 로딩 실패", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieCategory]);

  return (
    <div className="flex justify-center items-center">
      {isLoading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      ) : (
        <div className="flex justify-center items-center">
          <Movie movies={movies} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
