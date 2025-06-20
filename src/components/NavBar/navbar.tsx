import Nav from "./Nav";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center pl-4 gap-4 text-gray-700">
      <Nav page="home" />
      <Nav page="upcoming" />
      <Nav page="popular" />
      <Nav page="top_rated" />
      <Nav page="now_playing" />
    </nav>
  );
};

export default Navbar;
