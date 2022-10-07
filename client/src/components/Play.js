import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function PlayGame() {
  const [show, setShow] = useState(true)
    const hideButton = () => {
      setShow(!show)
    }

  return (
    <Link to="/genre">
      {show && <button
        type="submit"
        className={
          `inline-flex items-center h-40 w-full px-20 py-6 bg-green-600 border border-transparent rounded-md font-semibold text-2xl text-white uppercase tracking-widest active:bg-green-900 transition ease-in-out duration-150` 
        }
        onClick={() => {
          hideButton()
        }}
      >
        Start
      </button>
      }
    </Link>
  );
}

