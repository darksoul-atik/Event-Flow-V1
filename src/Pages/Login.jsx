import React, { useContext, useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import AuthContext from "../Contexts/AuthContexts";
import { toast, ToastContainer } from "react-toastify";
import { ToastContext } from "../Contexts/ToastContext";

const Login = () => {
  const {
    signIn,
    googleLogin,
    setUser,
    user,
    loading,
    setLogged,
    setErrorMsg,
    setMsgType,
  } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  useEffect(() => {
    if (location.state && !user && !loading) {
      toast(<span>You must log in to access this page.</span>, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [user, loading, location.state]);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const _user = result.user;
        navigate(`${location.state ? location.state : "/"}`);
        setLogged(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        setErrorMsg(true);
        setMsgType(error.message);
        showToast(
          "Sorry something wrong happened when trying to log in, Please try again!"
        );
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setError("");
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
        setLogged(true);
      })
      .catch((error) => {
        setError("Google login failed. Please try again.");
        setErrorMsg(true);
        setMsgType(error.message);
        showToast(
          "Sorry something wrong happened when trying to log in, Please try again!"
        );
      });
  };

  return (
    <div className="bg-gradient-to-br from-corange via-cwhite to-cdark overflow-hidden">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
        toastClassName="bg-[#1e2835] text-[#f5eddf] border border-[#f99e72] rounded-lg shadow-md"
        bodyClassName="text-sm font-medium flex items-center"
        progressClassName="bg-[#f99e72]"
      />

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corange via-cwhite to-cdark ">
        <div className="bg-white/10 py-20 lg:w-3/7  flex flex-col justify-center items-center backdrop-blur-md border border-white/20 md:w-full rounded-xl max-sm:w-full  p-6 shadow-lg">
          <h1 className=" text-cdark font-semibold pb-5 mb-5 lg:text-xl">
            Log in
          </h1>
          <div className="card py-6 bg-cdark w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleLogin} className="fieldset">
                <label className="label text-corange">Email</label>
                <input
                  type="email"
                  className="input bg-cwhite "
                  placeholder="Email"
                  name="email"
                  ref={emailRef}
                  required
                />
                <label className="label  text-corange">Password</label>
                <input
                  type="password"
                  className="input bg-cwhite  "
                  placeholder="Password"
                  name="password"
                  required
                />

                {/* Forget Password  */}
                <div>
                  <Link
                    to={"/forgetpassword"}
                    className="text-corange cursor-pointer"
                  >
                    Forget Password?
                  </Link>
                </div>

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button className="btn max-sm:btn-sm  text-corange btn-neutral mt-4">
                  Login
                </button>

                <button
                  onClick={handleGoogleLogin}
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
                  Login with Google
                </button>
              </form>

              <span className="mr-2 text-center text-cwhite">
                New to this website?{" "}
                <Link
                  to="/register"
                  className=" text-corange hover:underline hover:underline-offset-2  hover:text-corange transition-colors"
                >
                  Register
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

export default Login;
