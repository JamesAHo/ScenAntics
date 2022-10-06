import React from "react";
import { Link } from "react-router-dom";

export default function playGame({
    type = 'submit',
    className = '',
    processing,
    children,
  }) {
    return (
      <Link to="/genre">
      <button
        type={type}
        className={
          `inline-flex items-center px-4 py-2 bg-green-900 border border-transparent rounded-md font-semibold text-2xl text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${
            processing && 'opacity-25'
          } ` + className
        }
        disabled={processing}
      >
        Start
        {children}
      </button>
      </Link>
    );
  }

