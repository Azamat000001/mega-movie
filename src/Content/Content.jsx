import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from '../routes/HomePage/HomePage';
import MovieContainer from '../routes/MovieContainer/MovieContainer';
import DevsMovieContainer from '../routes/DevsMovieContainer/DevsMovieContainer';
import SignUp from '../components/Auth/SignUp/SignUp';
import SignIn from '../components/Auth/SignIn/SignIn';
import "./Content.css"

const Content = () => {
  return (
    <div className='content'>
      <Routes>
            <Route path="/home" element={ <HomePage/> } />
            <Route path="/movies" element={ <MovieContainer/> } />
            <Route path="/recommendMovies" element={ <DevsMovieContainer/> }/>
            <Route path="/SignUp" element={ <SignUp/> } />
            <Route path="/SignIn" element={ <SignIn/> } />
          </Routes>
    </div>
  )
}

export default Content
