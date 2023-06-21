import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase_config";
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
          <h3><i>{authUser.email}</i></h3>
          <button onClick={userSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="signed_out">
          <div className="sign_in"><NavLink to="SignIn">Log In</NavLink></div>
          <div className="sign_up"><NavLink to="SignUp">Sign Up</NavLink></div>
        </div>
      )}
    </div>
  );
};

export default AuthDetails;