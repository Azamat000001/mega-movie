import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase/firebase_config";
import AuthDetails from "../../AuthDetails/AuthDetails";
import { NavLink } from "react-router-dom";
import "./SignIn.css"
import SignUp from "../SignUp/SignUp";



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
    
          <div className="sign-in-container">
              <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
              <form onSubmit={signIn}>
              <div className="form"> <h1>log in</h1>
                <input
                className="input-form"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                  className="input-form"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
                </div>
              </form>
              <div className="offerToRegistor">
                <p className="php">if you didn't log in,you may</p>
                <h3 className="buttsign"><i><NavLink to="/SignUp">Sign up</NavLink></i></h3>
              </div>
              
            </div>
        
        
        
  );
};

export default SignIn;