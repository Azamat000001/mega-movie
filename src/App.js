import Movie from "./components/Movie/Movie";
// import SearchingMovie from "./routes/SearchingMovie/SearchingMovie";
import "./App.css";

import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

import React, { useState } from "react";
import { images } from "./assets/images.jpeg"
import Footer from "./Footer/Footer";
import Content from "./Content/Content";









function App () {
 
  const [ modalActive, setModalActive ] = useState(true)

  return (
    <div className="app">
      
        <header>
          <Navbar/>
          
        </header>
        <Content/>
        <Footer/>
        
    </div>
  );
}

export default App;
