import React from "react";
import { Link } from "react-router-dom";
const poster_url = "https://image.tmdb.org/t/p/w300/";

const MovieCard = ({ movie, title, img ,id}) => {
  return (
    <div className="flex flex-col w-48 p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer transform h-64   hover:600 transition duration-200 hover:scale-150">
      <div className="relative w-full h-56 group">
        <Link to={`/movie/${id}`}>
        <img className="w-full h-full rounded-lg" src={`${poster_url}${img}`} />
        </Link>
      </div>
      
    </div>
  );
};

export default MovieCard;
