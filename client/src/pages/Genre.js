import React from 'react';
import { Link } from "react-router-dom";


function Genre() {
  return (

    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-500 min-h-screen">
      <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">

                <h2 className="mb-8 text-2xl flex text-center text-cyan-900 font-bold">
                  Choose Your Genre: </h2>
              </div>
              <div className="mt-16 grid space-y-4">
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-green-400 focus:bg-green-50 active:bg-green-100">
                  <div className="relative flex items-center space-x-4 justify-center">
                    <a href="">
                      <Link to="/start">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-green-600 sm:text-base">ACTION</span>
                      </Link>
                    </a>
                  </div>
                </button>
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-green-400 focus:bg-green-50 active:bg-green-100">
                  <div className="relative flex items-center space-x-4 justify-center">

                    <a href="">
                    <Link to="/start">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-green-600 sm:text-base">HORROR</span>
                      </Link>
                    </a></div>
                </button>
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-green-400 focus:bg-green-50 active:bg-green-100">
                  <div className="relative flex items-center space-x-4 justify-center">

                    <a href="">
                    <Link to="/start">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-green-600 sm:text-base">COMEDY</span>
                      </Link>
                    </a></div>
                </button>
                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-green-400 focus:bg-green-50 active:bg-green-100">
                  <div className="relative flex items-center space-x-4 justify-center">

                    <a href="">
                    <Link to="/start">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-green-600 sm:text-base">ROM-COM</span>
                      </Link>
                    </a></div>
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  
 
);
}


export default Genre;