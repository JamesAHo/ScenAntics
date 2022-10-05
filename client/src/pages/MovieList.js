import {useEffect,  useState} from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'





function MovieList() {
    const [movies, setMovies] = useState([])
    
    const getData = async () => {
        const {data: {results}} = await axios.get(`${process.env.REACT_APP_MOVIE_API}/discover/movie?sort_by=popularity.desc`, {
            params: {api_key: process.env.REACT_APP_API_KEY}
        })
        // const userdata = {re}
        console.log(results)
        setMovies(results)
    }
    // use effect for data
    useEffect(() => {

        getData()

    },[])
    // render movie
    const displayMovie = () => (
        movies.map(movie => 
            <MovieCard
            key={movie.id}
            movie={movie}
            />
        ))
      
     

// return the components
  return (
    <div >
        
        {displayMovie()}

    </div>
  );
}

export default MovieList;