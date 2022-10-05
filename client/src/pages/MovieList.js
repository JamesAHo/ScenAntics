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
    <div>
      {movieDB.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.original_title || movie.original_name || movie.title}
          img={movie?.poster_path}
        />
      ))}
    </div>
  );
}

export default MovieList;
