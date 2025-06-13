import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { SiEventstore } from "react-icons/si";
import AuthContext from "../Contexts/AuthContexts";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
  };
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/reservation">Reservation</NavLink>
    </>
  );

  



  return (
    <div className="w-full bg-corange">

      <div className="navbar  px-0 bg-corange mx-auto max-w-screen-2xl ">
        {/* Logo of Website */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {/* Mobile Navbar */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box -ml-3 z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a onClick={() => {
              navigate("/")
            }} className="btn pl-0 hover:scale-110 hover:border-none btn-ghost text-xl hover:bg-transparent hover:text-inherit hover:shadow-none transition-none">
            <span>
              <SiEventstore size={24} />
            </span>
            <span  className="text-cdark max-sm:text-lg">Event</span>
            <span className="text-cwhite max-sm:text-lg -ml-1">FLOW</span>
          </a>
        </div>

        {/* NavLinks */}
        <div className="navbar-center hidden lg:flex">
          {/* Desktop Navbar */}
          <ul className="menu space-x-10 font-medium text-dark  menu-horizontal px-5">
            {links}
          </ul>
        </div>

        {/* Login /Registratation Button */}


      {
        loading ? (     <div className="  navbar-end bg-corange text-center text-white">
    <span className="loading loading-infinity loading-xl"></span>
      </div>):(  <div className="navbar-end  items-center   flex max-sm:mr-4">
          {/* User */}
          <div className="relative group">
            {!loading && user && (
              <>
                <div className="w-9 mr-5 flex flex-col items-center justify-center">
                  <img
                    className="rounded-full w-full h-9 hover:border-cwhite border-cdark border-3 cursor-pointer"
                    src={user?.photoURL}
                    alt="Profile"
                  />
                </div>
                <div className="absolute p-1 right-16 hidden opacity-80 bottom-2 group-hover:block bg-cdark text-cwhite text-xs rounded whitespace-nowrap z-10 shadow-lg">
                  {user.displayName}
                </div>
              </>
            )}
          </div>

          {!loading && (
            user ? (
              <div className="">
                <button
                  onClick={handleLogOut}
                  className="btn max-sm:text-xs bg-cwhite"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="">
                <Link to="/login" className="btn max-sm:text-xs bg-cwhite">
                  Log in
                </Link>
              </div>
            )
          )}
        </div>)
      }
      

      </div>
    </div>
  );
};

export default Navbar;
