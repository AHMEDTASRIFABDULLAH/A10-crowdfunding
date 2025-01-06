import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Root = () => {
  const { isDark } = useContext(AuthContext);
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-398px)] ">
        <Outlet></Outlet>
      </div>
      <div data-theme={isDark ? "dark" : "light"}>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
