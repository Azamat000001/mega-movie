import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, signOut, } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";


import Movie from "../../components/Movie/Movie";
import "./MovieContainer.css";






function MovieContainer () {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ movies, setMovies ] = useState([])
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
        } else {
          setAuthUser(null);
        }
      });

      getMovies();
  
      return () => {
        listen();
      };
}, []);
  
const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
      })
        .catch((error) => console.log(error));
};
  
    const getMovies = async () => { 
      setIsLoading(true)
      const data = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
      console.log(data.data.data.movies); 
      setMovies(data.data.data.movies)
      setIsLoading(false) 
  
    }
    
  

    
    return (<div> 
              { authUser ? (
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
                      <div className="item"><NavLink to="/recommendMovies" >Comuniti</NavLink></div>
                    </div>
                  )}
              
                </section>
              ) : (
                <div className="checkAuth"><h1>register before you get access</h1></div>
              )}
                
            </div>
          );
  }
  
  export default MovieContainer;
  