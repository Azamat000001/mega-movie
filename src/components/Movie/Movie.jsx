import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import SearchingMovie from "../../routes/SearchingMovie/SearchingMovie";


const Movie = ({ key, year, title, summary, poster, genres, ...props }) => {
    const [ likeCount, setLikeCount ] = useState(0)
    return (
       
            <div>
          
                <img src={poster} alt={title} title={title} />
                <div className="movie__column">
                    <h3 className="movie__title">{ title }</h3>
                    <h5 className="movie__year">{ year }</h5>
                    <p className="movie__summary">{summary.slice(0, 140)}</p>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="genres__genre">{genre}</li>
                        })}
                    </ul>
                 
                <div><NavLink to={`/movies/about:${key}`}>About</NavLink></div>
                </div>  
      
            </div>
        
    
    )
    
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;