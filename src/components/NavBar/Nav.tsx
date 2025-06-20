import { NavLink } from "react-router-dom";

interface NavProps {
  page: string;
}

const Nav: React.FC<NavProps> = ({ page }) => {
  const pageName: { [key: string]: string } = {
    home: "홈",
    upcoming: "개봉 예정",
    popular: "인기 영화",
    top_rated: "평점 높은",
    now_playing: "상영 중",
  };

  return (
    <NavLink
      to={page === "home" ? `/` : `/movies/${page}`}
      className={({ isActive }) => (isActive ? "text-lime-500 font-bold" : "")}
    >
      {pageName[page]}
    </NavLink>
  );
};

export default Nav;
