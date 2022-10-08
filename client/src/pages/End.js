import React from 'react';
import { Link } from "react-router-dom";


function End() {
    return (
        <div className="start bg-green-700 min-h-screen">
            <div class="flex items-center justify-center -mx-1">
                <p className="flex text-center justify-center font-apple-system text-2xl tracking-wide">How it Ended: TAKE A FINAL GROUP PICTURE OF THE AFTERMATH</p> 
                
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
                THANK YOU FOR PLAYING. 
            </p>

            <div className='flex justify-center'>
                <Link to='/'>
                    <button className="btn items-center btn-active btn-secondary w-64 h-5 font-apple-system text-black">HOME</button>
                </Link>
            </div>
        </div>


    );
}
export default End;