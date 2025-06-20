import { Link } from "react-router-dom";
import type { MovieCardProps } from "../../types/movie";
import { defaultImg } from "../../utils/movie-path";

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  poster_path,
  title,
  overview,
}) => {
  return (
    <Link to={`/movie-detail/${id}`}>
      <div className="relative group w-[150px] h-[230px] rounded-xl overflow-hidden">
        <img
          src={`${defaultImg}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-white bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-2 text-center">
          <h2 className="text-sm font-bold mb-1">{title}</h2>
          <p className="text-xs line-clamp-4">{overview}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
