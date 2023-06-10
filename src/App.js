import Movie from "./components/Movie/Movie";
import SearchingMovie from "./routes/SearchingMovie/SearchingMovie";
import "./App.css";
import HomePage from "./routes/HomePage/HomePage"
import MovieContainer from "./routes/MovieContainer/MovieContainer"

import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SignUp from "./components/Auth/SignUp/SignUp";

import React from "react";
import SignIn from "./components/Auth/LogIn/LogIn";
import { images } from "./assets/images.jpeg"







function App () {
 
  return (
    <div className="app">
      
        <header>
          <Navbar/>
        </header>
        <div className="content">
          <Routes>
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/movies" element={ <MovieContainer/> } />
            <Route path="/SignUp" element={ <SignUp/> } />
            <Route path="/SignIn" element={ <SignIn/> } />
            <Route path="/movies/about" element={ <SearchingMovie/> } />
          </Routes>
        </div>
     
    </div>
  );
}

export default App;
