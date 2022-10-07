import React from "react";
import { Link } from "react-router-dom";

export default function playGame({
    type = 'submit',
    className = '',
    processing,
  }) {
    return (
      <Link to="/genre">
      <button
        type={type}
        className={
          `inline-flex items-center h-40 w-full px-20 py-6 bg-green-600 border border-transparent rounded-md font-semibold text-2xl text-white uppercase tracking-widest active:bg-green-900 transition ease-in-out duration-150 ${
            processing && 'opacity-25'
          } ` + className
        }
        disabled={processing}
      >
        Start
      </button>
      </Link>
    );
  }

