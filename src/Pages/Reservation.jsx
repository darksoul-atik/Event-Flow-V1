import React from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const Reservation = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-cdark text-cwhite px-6 text-center">
      <Helmet>
        <title>EventFLOW | Reservation</title>
      </Helmet>
      <div className="max-w-md">
        <AlertTriangle size={60} className="text-corange mb-6 mx-auto" />
        <h1 className="text-4xl font-bold mb-4 text-corange">Coming Soon.</h1>
        <p className="text-base md:text-lg text-cwhite/80 mb-6">
          This Page will be created when I implement Database on this website.
          Thanks for visiting
        </p>
        <Link
          to="/"
          className="inline-block bg-corange text-cwhite px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Reservation;
