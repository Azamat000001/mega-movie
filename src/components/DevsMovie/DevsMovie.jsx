import React from 'react';
import './DevsMovie.css'
import PropTypes from 'prop-types'
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore'
import { db } from '../../firebase/firebase_config';

const DevsMovie = ({ id, year, title, summary, poster, genres, rating, ...props }) => {

    const deleteDevsMovie = async (id) => {
        const devsMovieDoc = doc(db, 'DevsMovies', id);
        await deleteDoc(devsMovieDoc);
    }

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
            

            <button 
                onClick={() => {
                    deleteDevsMovie(id)
                }}
            >Delete Movie</button>
        </div>  
    </div>
    
  )
}

DevsMovie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default DevsMovie
