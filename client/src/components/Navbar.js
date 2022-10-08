import React from "react";
import { Link } from "react-router-dom";

import Auth from "../utils/Authentication";


export default function Navbar() {
   





    // logout login 
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
  
  return (
  
   <header className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Hello</h1>
          </Link>
          <p className="m-0">Welcome to Sceantics.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              {/* <Link className="ml-2" to="/me">
                {Auth.getUser().data.name}'s profile
              </Link> */}

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" to="/login">
                Login
              </Link>
              <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
   
   
  );
}