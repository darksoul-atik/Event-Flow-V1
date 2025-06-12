import React, { useContext } from "react";
import AuthContext from "../Contexts/AuthContexts";

const Profile = () => {
  const { user } = useContext(AuthContext);

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

  return (
    <div className="min-h-screen bg-cdark flex flex-col items-center py-10 px-4 gap-10 text-cwhite">
      {/* Profile Card */}
      <div className="bg-cwhite text-cdark rounded-2xl shadow-xl w-full max-w-4xl p-10 flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center items-start md:items-center">
          <img
            src={photoURL}
            alt="Profile"
            className="w-60 h-60 md:w-72 md:h-72 rounded-3xl border-[6px] border-corange object-cover shadow-lg"
            onError={(e) => (e.target.src = "/fallback.jpg")}
          />
        </div>

        {/* Details */}
        <div className="flex-grow space-y-4">
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
        </div>
      </div>

      {/* Section 1: Account Activity */}
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

      {/* Section 2: Security Info */}
      <div className="w-full max-w-4xl bg-cwhite text-cdark rounded-2xl shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold text-cred">Security Information</h3>
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
            <span className="font-semibold text-corange">Token Expires At:</span>{" "}
            {new Date(expirationTime).toUTCString()}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
