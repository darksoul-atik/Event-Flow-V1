import React, { useContext, useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import AuthContext from "../Contexts/AuthContexts";

const Register = () => {
  const { createUser, updateUser, setUser, googleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    } else {
      setError(" ");
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photoURL });
              navigate("/");
            })
            .catch((error) => {
              setUser(user);
              navigate("/");
              console.log("Error while signing up user", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage, errorCode);
        });
    }
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        setError("Google login failed. Please try again.");
      });
  };

  return (
    <div className="bg-gradient-to-br from-corange via-cwhite to-cdark overflow-hidden">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corange via-cwhite to-cdark ">
        <div className="bg-white/10 py-20 lg:w-3/7  flex flex-col justify-center items-center backdrop-blur-md border border-white/20 md:w-full rounded-xl max-sm:w-full  p-6 shadow-lg">
          <h1 className=" text-cdark font-semibold pb-5 mb-5 lg:text-xl">
            Sign Up
          </h1>

          {/* Form Container */}
          <div className="card py-6 bg-cdark w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              {/* Form  */}
              <form onSubmit={handleRegister} className="fieldset">
                {/* Name */}
                <label className="label text-corange">Name</label>
                <input
                  type="text"
                  className="input bg-cwhite "
                  placeholder="Name"
                  name="name"
                  required
                />
                {/* Photo URL */}
                <label className="label text-corange">Photo URL</label>
                <input
                  type="text"
                  className="input bg-cwhite "
                  placeholder="PhotoURL"
                  name="photoURL"
                />
                {/* Email */}
                <label className="label text-corange">Email</label>
                <input
                  type="email"
                  className="input bg-cwhite "
                  placeholder="Email"
                  name="email"
                  required
                />

                {/* Passowrd */}
                <div className="relative">
                  <label className="label  text-corange">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input  bg-cwhite  "
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                    className="absolute cursor-pointer right-7 max-sm:right-3 bottom-3"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={15} className="text-cdark" />
                    ) : (
                      <FaEye size={15} className="text-cdark" />
                    )}
                  </div>

                  <p>
                    {error && (
                      <span className="text-cred text-sm">{error}</span>
                    )}
                  </p>
                </div>

                {/* Register Button */}
                <button className="btn max-sm:btn-sm  text-corange btn-neutral mt-4">
                  Register
                </button>

                {/* Register with Google */}
                <button
                  onClick={handleGoogleRegister}
                  className="btn max-sm:btn-sm mt-2 bg-white text-black border-[#e5e5e5]"
                >
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
                  Register with Google
                </button>
              </form>
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
    </div>
  );
};

export default Register;
