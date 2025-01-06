import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
const NavBar = () => {
  const { user, logOut, isDark, handelDark } = useContext(AuthContext);

  return (
    <div
      data-theme={isDark ? "dark" : "light"}
      className="sticky top-0 z-50 bg-gray-800"
    >
      <div className=" flex justify-between py-3 px-6 text-gray-400 font-semibold ">
        <div className="lg:hidden">
          <div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className="btn btn-ghost ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" bg-black  menu menu-sm dropdown-content  rounded-box z-50 mt-3 w-52 p-2 shadow   "
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/campaign">All Campaign</NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to={`/donations`}>My Donations</NavLink>
                  </li>
                  <li>
                    <NavLink to="/addcampaing">Add New Campaign</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to={`/mycampaing/${user?.email}`}>My Campaign</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex  items-center">
          <Link className=" hidden lg:block font-bold text-2xl sm:text-4xl text-pink-500">
            INDIEGOGO
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className=" flex gap-8 items-center ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/campaign">All Campaign</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/donations`}>My Donations</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to="/addcampaing">Add New Campaign</NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink to={`/mycampaing/${user?.email}`}>My Campaign</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="flex  items-center">
          <div className="flex gap-4 items-center">
            <h1 className=" font-bold text-xl">
              <CiDark />
            </h1>
            <input
              onClick={handelDark}
              type="checkbox"
              className="toggle bg-blue-300 "
              defaultChecked
            />
            <h1 className=" text-xl font-bold mr-6">
              <CiLight />
            </h1>
          </div>
          {user ? (
            <div className="dropdown dropdown-hover ">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  className="w-[40px]  h-[40px] rounded-full object-cover ring-4 ring-green-500 "
                  src={user.photoURL}
                  alt="profile photo miss"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content -right-[100px] transform -translate-x-1/2  menu  rounded-box z-50 w-52 p-2 shadow bg-[#1F2937]"
              >
                <li>
                  <p className=" ">{user.displayName}</p>
                </li>
                <li>
                  <Link onClick={logOut} to="/login" className="btn   ">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
