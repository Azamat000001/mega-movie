import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase_config";
import AuthDetails from "../../AuthDetails/AuthDetails";
import { NavLink } from "react-router-dom";
import "./SignIn.css"
import SignUp from "../SignUp/SignUp";
import Modal from "../../Modal/Modal";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <h1>Log In to your Account</h1>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit">Log In</button>
        </form>
        <div className="offerToRegistor">
          <p>if you didn't log in,you may</p>
          <h4><NavLink to="/SignUp">Sign up</NavLink></h4>
        
        </div>
      </div>
    </div>
    
  );
};

export default SignIn;