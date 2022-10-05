import React from 'react';

const MovieCard = ({movie}) => {

    
    const link = "https://image.tmdb.org/t/p/w342"
    const moviePoster = `${link}${movie.poster_path}`

    return (

        <div className='flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer rounded-b-md'>
            <div className='relative w-full h-56 group'>
            <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex}`}>

                    <h2 className='rounded-sm'>{movie.title}</h2>
                    {movie.poster_path ? <img className="w-full h-full rounded-lg" src={moviePoster} alt="" /> : null}

                </div>
            </div>
            

        </div>
    )
}

export default MovieCard;

