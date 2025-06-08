import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-gradient-to-br from-corange via-cwhite to-cdark overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corange via-cwhite to-cdark ">
          <div className="bg-white/10 py-20 lg:w-3/7  flex flex-col justify-center items-center backdrop-blur-md border border-white/20 md:w-full rounded-xl max-sm:w-full  p-6 shadow-lg">
            <h1 className=" text-cdark font-semibold pb-5 mb-5 lg:text-xl">
              Sign Up
            </h1>
            <div className="card py-6 bg-cdark w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label text-corange">Email</label>
                  <input
                    type="email"
                    className="input bg-cwhite "
                    placeholder="Email"
                  />
                  <label className="label  text-corange">Password</label>
                  <input
                    type="password"
                    className="input bg-cwhite  "
                    placeholder="Password"
                  />

                  <button className="btn max-sm:btn-sm  text-corange btn-neutral mt-4">
                    Register
                  </button>
                  <button className="btn max-sm:btn-sm mt-2 bg-white text-black border-[#e5e5e5]">
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                          fill="#34a853"
                          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                          fill="#fbbc02"
                          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                      </g>
                    </svg>
                    Login with Google
                  </button>
                </fieldset>
                <span className="mr-2 text-center text-cwhite">
                  Already have an account{" "}
                  <Link
                    to="/login"
                    className=" text-corange hover:underline hover:underline-offset-2  hover:text-corange transition-colors"
                  >
                    Login
                  </Link>
                </span>
              </div>

              <div className="flex items-center justify-center">
                <Link
                  to="/"
                  className="btn border-none bg-corange font-medium text-cwhite btn-xs"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
