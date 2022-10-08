import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useGetMoviesDBQuery } from "../redux/api/theMoviedb";
import Loader from "../components/Loader";

function MovieList() {
  const { data, isFetching } = useGetMoviesDBQuery();
  if (isFetching) return <Loader title="Loading movies" />;

  const movieDB = data?.results;

  console.log(movieDB);
  // return the components
  return (
    <div className="flex flex-col">
      <div className='flex flex-wrap sm:justify-start justify-center gap-6'>
        {movieDB.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.original_title || movie.original_name || movie.title}
            img={movie?.poster_path}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
