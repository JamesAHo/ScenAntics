import React from'react';
import { useParams } from 'react-router-dom';
import { useGetMoviesbyIdQuery } from '../redux/api/theMoviedb';
const base_url = "https://image.tmdb.org/t/p/original"


function SingleMoviePage () {
    const { id } = useParams();

    const info = {
        id: id
    };
    const {data} = useGetMoviesbyIdQuery(info);

    console.log(data)

    return (
        <div className='flex-auto'>
            <div className=' justify-end w-screen h-screen  overflow-hidden relative' style={{backgroundSize: 'cover', backgroundImage: `url(${base_url}${data?.backdrop_path})`, }} >
                <p>this is images</p>
            </div>
            {/* {comment section} */}
            <div className='w-1/2 justify-start overflow-hidden'>
                
            </div>

        
        </div>   
        
    )
}
export default SingleMoviePage;