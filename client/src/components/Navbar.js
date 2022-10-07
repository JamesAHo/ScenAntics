import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/Authentication";

export default function Navbar() {
  

  
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
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getUser().data.name}'s profile
              </Link>
              <button className="" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
   
   
  );
}