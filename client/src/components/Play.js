import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function PlayGame() {
  const [show, setShow] = useState(true)
  const hideButton = () => {
    setShow(!show)
  }

  return (
    <div className='flex justify-center'>
    <Link to="/genre">
      {show && <button
        type="submit"
        className=
        "flex justify-center text-center h-30 w-6 px-20 py-5  bg-green-600 border border-transparent rounded-md font-semibold text-2xl text-white uppercase tracking-widest active:bg-green-900 transition ease-in-out duration-150"

        onClick={() => {
          hideButton()
        }}
      >
        Start
      </button>
      }
    </Link>
    </div>
  );
}

