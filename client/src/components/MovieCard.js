import React from 'react';
const poster_url = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movie, title, img}) => {

    
    

    return (

        <div >
            <h2 className='font-bold text-sm items-center '>{title}</h2>
            <img src={`${poster_url}${img}`} />
           

        </div>
    )
}

export default MovieCard;

