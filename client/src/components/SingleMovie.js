import React from "react";
import { useParams } from "react-router-dom";
import { useGetMoviesbyIdQuery } from "../redux/api/theMoviedb";
const base_url = "https://image.tmdb.org/t/p/original";

function SingleMoviePage() {
  const { id } = useParams();

  const info = {
    id: id,
  };
  const { data } = useGetMoviesbyIdQuery(info);

  
  

  return (
    <div
      className="w-screen h-screen relative overflow-hidden mr-4"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${data?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="gap-5 font-times text-green-400 text-7xl text-center   ">{data?.title}</div>

      {/* <div className=" text-left  font-apple-system text-black text-2xl ">{data?.overview}</div> */}
    </div>
  );
}
export default SingleMoviePage;
