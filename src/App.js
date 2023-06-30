import Movie from "./components/Movie/Movie";
// import SearchingMovie from "./routes/SearchingMovie/SearchingMovie";
import "./App.css";

import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import React, { useState } from "react";
import { images } from "./assets/images.jpeg"
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import AuthDetails from "./components/AuthDetails/AuthDetails";









function App () {
 
  const [ modalActive, setModalActive ] = useState(true)
 
  return (
    <div className="app">
      
       
        <Navbar/>
        <Content/>
        <Footer/>
        
    </div>
  );
}

export default App;
