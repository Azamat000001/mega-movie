import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import SearchingMovie from "../../routes/SearchingMovie/SearchingMovie";


const Movie = ({ key, year, title, summary, poster, genres, rating, runtime, ...props }) => {
    const reitingItemList = document.querySelectorAll(".reating__item");
    const reitingItemArrey = Array.prototype.slice.call(reitingItemList);

    reitingItemArrey.forEach(item => 
        item.addEventListener('click', () => 
            item.parentNode.dataset.totalValue = item.dataset.itemValue
        )
    );
    return (
       
            <div className="movie__card">
          
                <img src={poster} alt={title} title={title} />

                <div className="movie__column">
                    <h2 className="movie__title">{ title }</h2>
                    <div className="movie__about">
                        <p className="movie__year">{ year }</p>
                    </div>
                    
                   
                    
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return <li key={index} >{genres.slice(0, 1)}</li>
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 200)}</p>
                    <h5 className="movi__runtime"><i>{ runtime }</i>min</h5>
                    <div className="all__rating">
                        <div className="movie__rating">
                            <div className="rating"><h2>{rating}</h2></div>
                            <h3>Mega rating</h3>
                        </div>
                        <div className="reiting" data-total-value="0">
                            <div className="reating__item" data-item-value="1">♥</div>
                        </div>
                    </div>
                    
                 
                
                </div>  
      
            </div>
        
    
    )
    
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string.isRequired
};

export default Movie;