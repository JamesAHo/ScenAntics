import React from 'react';
import { Link } from "react-router-dom";



function Start() {
    return (
        <div className="start bg-green-700 min-h-screen">
            <div class="flex items-center justify-center -mx-1">
                <p className="flex text-center justify-center font-apple-system text-2xl text-black tracking-wide">How it started: TAKE A GROUP PIC BEFORE STARTING
                </p>
            </div>
            <main className="flex  items-center justify-center bg-green-700 font-apple-system">
                <label for="dropzone-file" className=" cursor-pointer flex w-50 max-w-sm flex-col items-center rounded-l border-2 border-dashed border-green-400 bg-white p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>

                    <h2 className="mt-4 text-md font-small text-gray-700 tracking-wide">UPLOAD PHOTO</h2>

                    <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </main>
            <p className='font-apple-system text-xl text-center break-normal leading-loose p-8'> 
            <ul className='text-center text-black tracking-wide list-outside'>
             <li>HOW TO PLAY:</li>   

             <li>   Grab a drink of your choice or if you choose not to drink we have some activities you can do to play along.</li>

               <li> Each player with take their turn and take a sip whenever 'this' or 'that' happens on screen, this will vary with each timed round.</li> 
               <li>(IF IT DOES NOT HAPPEN IN THE TIME ALLOTED THEN YOU ARE SAVED) </li>

              <li>  Hit NEXT for the next player to take their turn. </li>

              <li>  FOR the non-drinkers you will do the action on the game screen calls for if 'this' or 'that' happens on screen.</li>
                </ul>
            </p>


            <div className='flex justify-center'>
                <Link to='/gamepage'>
                    <button className="btn items-center  btn-outline btn-warning text-2xl w-64 h-5 font-apple-system text-black">PLAY</button>
                </Link>
            </div>
        </div>


    );
}
export default Start;
