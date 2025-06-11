import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { SiEventstore } from "react-icons/si";
import AuthContext from "../Contexts/AuthContexts";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/extra">Extra Page</NavLink>
    </>
  );

  return (
    <div className="w-full bg-corange">
      <div className="navbar  px-0 bg-corange mx-auto max-w-screen-2xl ">
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
          <a className="btn pl-0 hover:scale-110 hover:border-none btn-ghost text-xl hover:bg-transparent hover:text-inherit hover:shadow-none transition-none">
            <span>
              <SiEventstore size={24} />
            </span>
            <span className="text-cdark max-sm:text-lg">Event</span>
            <span className="text-cwhite max-sm:text-lg -ml-1">FLOW</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Desktop Navbar */}
          <ul className="menu space-x-10 font-medium text-dark  menu-horizontal px-5">
            {links}
          </ul>
        </div>

        {/* Login /Registratation Button */}

        <div className="navbar-end flex gap-5">
          {/* User */}
          <div>{user && <p>{user?.displayName}</p>}</div>

          <div className="">
            <Link to="/login" className="btn max-sm:text-xs bg-cwhite">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
