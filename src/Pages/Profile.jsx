import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContexts";
import { toast, ToastContainer } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const {
    uid,
    displayName,
    email,
    emailVerified,
    photoURL,
    metadata: { creationTime, lastSignInTime },
    providerData: [providerInfo],
    stsTokenManager: { expirationTime },
  } = user;

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    console.log(user);

    const updateData = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUser(updateData)
      .then(() => {
        setUser({ ...user, ...updateData });
        toast(<span>Profile Updated </span>, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setUser({ ...user, ...updateData });
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });
  };

  return (
    <div className="min-h-screen bg-cdark flex flex-col items-center py-10 px-4 gap-10 text-cwhite">
      {/* Profile Card */}
      <div className="bg-cwhite text-cdark rounded-2xl shadow-xl w-full max-w-4xl p-10 flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center items-start md:items-center">
          <img
            src={
              photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 rounded-3xl border-[6px] border-corange object-cover shadow-lg"
            onError={(e) => (e.target.src = "/fallback.jpg")}
          />
        </div>

        {/* Details */}
        <div className="flex-grow  space-y-4">
          <h2 className="text-3xl font-bold text-corange mb-2">
            {displayName || "Unnamed User"}
          </h2>

          <ul className="space-y-2 text-base">
            <li>
              <span className="font-semibold text-corange">Email:</span> {email}
              {emailVerified && (
                <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Verified
                </span>
              )}
            </li>
            <li>
              <span className="font-semibold text-corange">Provider:</span>{" "}
              {providerInfo?.providerId || "N/A"}
            </li>
            <li>
              <span className="font-semibold text-corange">UID:</span> {uid}
            </li>
          </ul>
          <h2 className="text-left  font-bold mt-10">
            Update Profile Information
          </h2>

          <div className="bg-cdark border p-4 rounded-2xl">
            {/* User Update Form */}
            <form
              onSubmit={handleUpdate}
              className="fieldset max-sm:w-full md:w-3/5  w-1/5  flex flex-col items-start"
            >
              <label className="label text-corange">Name</label>
              <input
                type="text"
                className="input text-cdark placeholder-corange bg-cwhite "
                placeholder="Enter your name"
                name="name"
              />
              <label className="label mt-2  text-corange">Photo URL</label>
              <input
                type="text"
                className="input text-cdark placeholder-corange bg-cwhite "
                placeholder="Enter the photo URL here"
                name="photoURL"
              />
              <button className="btn  max-sm:btn-sm  text-corange btn-neutral mt-4">
                Update Information
              </button>
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
            </form>
          </div>
        </div>
      </div>

      {/*  Account Activity */}
      <div className="w-full max-w-4xl bg-cwhite text-cdark rounded-2xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-cred">Account Activity</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-cdark text-cwhite rounded-xl shadow">
            <p className="font-semibold text-corange">Last Sign-In:</p>
            <p>{lastSignInTime}</p>
          </div>
          <div className="p-4 bg-cdark text-cwhite rounded-xl shadow">
            <p className="font-semibold text-corange">Account Created:</p>
            <p>{creationTime}</p>
          </div>
        </div>
      </div>

      {/*  Security Info */}
      <div className="w-full max-w-4xl bg-cwhite text-cdark rounded-2xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-cred">
          Security Information
        </h3>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-semibold text-corange">Email Verified:</span>{" "}
            {emailVerified ? "Yes" : "No"}
          </li>
          <li>
            <span className="font-semibold text-corange">Auth Provider:</span>{" "}
            {providerInfo?.providerId}
          </li>
          <li>
            <span className="font-semibold text-corange">
              Token Expires At:
            </span>{" "}
            {new Date(expirationTime).toUTCString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
