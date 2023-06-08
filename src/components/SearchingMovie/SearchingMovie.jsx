import { useParams } from "react-router-dom"

const SearchingMovie = ({   key, id, year, title, summary, poster, genres,  ...props }) =>{ 
    const params = useParams()  
    console.log(params.name);
    return( 
        <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__column">
            <h3 className="movie__title">{ title }</h3>
            <h5 className="movie__year">{ year }</h5>
            <p className="movie__summary">{ summary }</p>
            <ul className="movie__genres">
                {genres.map((genre, index) => {
                    return <li key={index} className="genres__genre">{genre}</li>
                })}
            </ul>
          
        </div>
    </div>
    )
} 
export default SearchingMovie;