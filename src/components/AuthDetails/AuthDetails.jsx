import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase-config";
import "./AuthDetails.css"

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <div className="signed_in">
          <p>Signed In as </p>
          <h4>{authUser.email}</h4>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : (
        <p className="signed_out">Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;