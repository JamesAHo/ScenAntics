import React from 'react';
import { Link } from "react-router-dom";






function Start() {
    return (
        <div className="start">
            <div class="flex items-center justify-center -mx-1">
            <p className="font-apple-system text-2xl">How it started! Upload a photo of your group before starting the game to keep for a funny memory</p>
            </div>
            <main className="flex min-h-full items-center justify-center bg-green-900 font-apple-system bg-opacity-40">
                <label for="dropzone-file" className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>

                    <h2 className="mt-4 text-md font-small text-gray-700 tracking-wide">UPLOAD PHOTO</h2>

                    <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </main>
            <p> Rules: </p>

            <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-green-400 focus:bg-green-50 active:bg-green-100 justify-center">
                <div className="relative flex items-center space-x-4 justify-center">

                    <a href="">
                        <Link to='/gamepage'>
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-lg transition duration-300 group-hover:text-green-600 sm:text-base text-center">Start</span>
                        </Link>
                    </a></div>

            </button>
        </div>
    );
}
export default Start;
