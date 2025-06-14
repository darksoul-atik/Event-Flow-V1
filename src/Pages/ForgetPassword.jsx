import React, { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import { ToastContext } from "../Contexts/ToastContext";
import AuthContext from "../Contexts/AuthContexts";
import { ToastContainer } from "react-toastify";

const ForgetPassword = () => {
  const { forgetPassword } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);
  const emailRef = useRef();
  const [error, setError] = useState("");

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      setError("Please enter your email first.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        setError("");
      })
      .catch((error) => {
        console.error("Password Reset Error:", error.message);
        setError("Failed to send reset email. Check your email and try again.");
      });
  };

  return (
    <div className="bg-gradient-to-br from-corange via-cwhite to-cdark overflow-hidden">
      <Helmet>
        <title>Forget Password</title>
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

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-corange via-cwhite to-cdark">
        <div className="bg-white/10 py-20 lg:w-3/7 flex flex-col justify-center items-center backdrop-blur-md border border-white/20 md:w-full rounded-xl max-sm:w-full p-6 shadow-lg">
          <h1 className="text-cdark font-semibold pb-5 mb-5 lg:text-xl">
            Reset Your Password
          </h1>
          <div className="card py-6 bg-cdark w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleForgetPassword}>
                <label className="label text-corange">Email</label>
                <input
                  type="email"
                  className="input bg-cwhite"
                  placeholder="Enter your email"
                  ref={emailRef}
                  required
                />
                {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
                <button
                  onClick={() => {
                    showToast("Password Reset Email has been sent.");
                  }}
                  className="btn max-sm:btn-sm text-corange btn-neutral mt-4"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-4 flex flex-col items-center gap-1">
                <Link
                  to="/login"
                  className="text-corange hover:underline hover:underline-offset-2 transition-colors"
                >
                  Back to Login
                </Link>
                <Link
                  to="/"
                  className="btn border-none bg-corange font-medium text-cwhite btn-xs mt-2"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
