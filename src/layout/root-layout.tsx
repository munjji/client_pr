import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
