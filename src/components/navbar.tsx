import Nav from "./Nav";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center pl-4 gap-2 text-gray-700">
      <Nav page="home" />
      <Nav page="upcoming" />
      <Nav page="popular" />
      <Nav page="top-rated" />
      <Nav page="now_playing" />
    </nav>
  );
};

export default Navbar;
