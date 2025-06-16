import React from "react";
import { ArrowLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corange via-cwhite to-cdark p-6">
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center flex items-center flex-col "
      >
        <h1 className="text-8xl font-extrabold text-cdark drop-shadow-md">
          404
        </h1>
        <p className="text-2xl mt-4 font-semibold text-gray-800">
          Oops! Page not found.
        </p>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          It looks like you’re trying to explore a destination that doesn’t
          exist. Let’s get you back to planning your next great event or
          adventure.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 flex items-center gap-2 bg-corange hover:bg-cwhite hover:text-corange text-white font-medium rounded-lg shadow-md transition"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default Error404Page;
