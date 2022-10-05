import React from 'react';





function Start() {
    return (
        <div className="start">
            <h1> Invite Your Buddies: {users} </h1>

            <main class="flex min-h-screen items-center justify-center bg-gray-100 font-sans">
                <label for="dropzone-file" class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>

                    <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">UPLOAD PHOTO</h2>

                    <p class="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </main>
            <p> Rules: </p>

            <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div class="relative flex items-center space-x-4 justify-center">

                    <a href="">
                        <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Start</span>
                    </a></div>

            </button>
        </div>
    );
}
export default Start;