import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/profile">My Profile</NavLink>
      <NavLink to="/extra">Extra Page</NavLink>
    </>
  );

  return (
    <div className="w-full bg-cwhite">
      <div className="navbar bg-cwhite mx-auto max-w-screen-2xl ">
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
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <span className="text-cdark">Event</span>
            <span className="text-corange -ml-1">FLOW</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* Desktop Navbar */}
          <ul className="menu space-x-10 font-medium text-dark  menu-horizontal px-5">{links}</ul>
        </div>

        {/* Login /Registratation Button */}
        <div className="navbar-end">
          <a className="btn bg-corange">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
