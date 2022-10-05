import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ fixed }) {
  const [showNav, setShow] = useState(false)

  function closeMobile() {
    setShow(false);
  }

  function toggleNav() {
    setShow(!showNav);
  }

  function closeMobileOnResize() {
    if (window.innerWidth > 700) {
      closeMobile();
    }
  }

  window.onresize = closeMobileOnResize;
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-emerald-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#ScenAntics"
            >
              ScenAntics
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <div
                  className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#ScenAntics"
                >
                  <i className="fab fa-login-square text-lg leading-lg text-white opacity-75">
                    <Link to="/login">
                      <h4 onClick={closeMobile} href="#login" className="tab-button">
                        Login
                      </h4>
                    </Link>
                  </i>
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-signup text-lg leading-lg text-white opacity-75">
                    <Link to="/signup">
                      <h4 onClick={closeMobile} href="#signup" className="tab-button">
                        Signup
                      </h4>
                    </Link>
                  </i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}