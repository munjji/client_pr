import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Movie from "../components/Movie/Movie";
import type { MovieProps, MovieResponse } from "../types/movie";

const MoviesPage = () => {
  const { movieCategory } = useParams();
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get<MovieResponse>(
          `https://api.themoviedb.org/3/movie/${movieCategory}?language=ko-KR&page=${pageNumber}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDJkMDJlMTJiMjUyNjliMzJhOWZhOWUwZDdmNzAxZSIsIm5iZiI6MTY5Njg2NjkzNy40NTksInN1YiI6IjY1MjQyMjc5ZmQ2MzAwMDBjNTY5NzA5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yJDXC4THhoaZU7QjXxBIeJ3tBOqXxjt6oPFeKr2HrU`,
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
  }, [movieCategory, pageNumber]);

  const handleIncreasePage = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handleDecreasePage = () => {
    setPageNumber((prev) => prev - 1);
  };

  return (
    <div className="flex justify-center items-center">
      {isLoading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={handleDecreasePage}
              className={`w-10 h-10 p-4 rounded-2xl flex items-center ${
                pageNumber == 1
                  ? `cursor-not-allowed bg-gray-400`
                  : `bg-purple-300 hover:bg-lime-500`
              }`}
            >{`<`}</button>
            {pageNumber} 페이지
            <button
              onClick={handleIncreasePage}
              className="w-10 h-10 p-4 rounded-2xl bg-purple-300 hover:bg-lime-500 flex items-center"
            >{`>`}</button>
          </div>
          <Movie movies={movies} />
        </div>
      )}
    </div>
  );
};

export default MoviesPage;
