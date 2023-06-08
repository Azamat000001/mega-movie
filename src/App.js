import React from "react";
import Movie from "./components/Movie/Movie";
import SearchingMovie from "./components/SearchingMovie/SearchingMovie";
import "./App.css";
import HomePage from "./routes/HomePage/HomePage"
import MovieContainer from "./routes/MovieContainer/MovieContainer"

import { Route, Routes, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";



// class App extends React.Component {

//   state = {
//     isLoading: true,
//     movies: []
//   };

//   getMovies = async () => {
//     const { data: { data: { movies }}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
//     console.log(movies);
//     this.setState({ movies, isLoading: false })
//   }

//   componentDidMount(){
//     this.getMovies();
//   }

//   render(){
//     const { isLoading, movies } = this.state
//     return (
//       <section className="container">
//         { isLoading ? (
//           <div className="loader">
//             <span className="loader__text">Загрузка...</span>
//           </div> 
//          ) : (
//           <div className="movies">
//             {movies.map((movie) => (
              
//                 <Movie 
//                   key={movie.id}
//                   id={movie.id} 
//                   year={movie.year}
//                   title={movie.title} 
//                   summary={movie.summary} 
//                   poster={movie.medium_cover_image}
//                   genres={movie.genres}
//                 />
              
//             ))}
//           </div>
//         )}
        
//       </section>
//     );
//   }
 
// };

function App () {
 
  return (
    <div className="app">
      <Navbar/>
      
      <Routes>
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/movies" element={ <MovieContainer/> } />
      </Routes>
    </div>
  )
}

export default App;
