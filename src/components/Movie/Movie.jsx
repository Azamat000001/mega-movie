import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import SearchingMovie from "../../routes/SearchingMovie/SearchingMovie";


const Movie = ({ key, year, title, summary, poster, genres, rating, ...props }) => {
    const reitingItemList = document.querySelectorAll(".reating__item");
    const reitingItemArrey = Array.prototype.slice.call(reitingItemList);

    reitingItemArrey.forEach(item => 
        item.addEventListener('click', () => 
            item.parentNode.dataset.totalValue = item.dataset.itemValue
        )
    );
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
                    <div className="movie__rating">The film is rated <span>{rating}</span> points</div>
                    <div className="reiting" data-total-value="1">
                        <div className="reating__item" data-item-value="5">♥</div>
                        <div className="reating__item" data-item-value="4">♥</div>
                        <div className="reating__item" data-item-value="3">♥</div>
                        <div className="reating__item" data-item-value="2">♥</div>
                        <div className="reating__item" data-item-value="1">♥</div>
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
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;