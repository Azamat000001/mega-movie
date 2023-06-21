import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";


import Movie from "../../components/Movie/Movie";
import "./MovieContainer.css";






function MovieContainer () {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ movies, setMovies ] = useState([])
  
    const getMovies = async () => { 
      setIsLoading(true)
      const data = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      console.log(data.data.data.movies); 
      setMovies(data.data.data.movies)
      setIsLoading(false) 
  
    }
    
    useEffect(() =>{ 
      getMovies()
    }, [])

    
    return (<div> 
            <section className="container">
              { isLoading ? (
                null
               ) : (
                 <div className="movies">
                  
                  {movies.map((movie) => (
                    <div className="movie">
                    <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year}
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
                      rating={movie.rating}
                      runtime={movie.runtime}
                    />
                    </div>
                    
                        
                  ))}
                </div>
              )}
            
            </section>
               </div>
          );
  }
  
  export default MovieContainer;
  