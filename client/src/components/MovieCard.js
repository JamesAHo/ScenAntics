import React from 'react';
const poster_url = "https://image.tmdb.org/t/p/original"

const MovieCard = ({movie, title, img}) => {

    
    

    return (

        <div className='flex flex-wrap w-[100px] mt-1 rounded-lg'>
            <p>{title}</p>
            <img src={`${poster_url}${img}`} />
           

        </div>
    )
}

export default MovieCard;

