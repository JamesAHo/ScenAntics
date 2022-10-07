import {React, useState} from "react";
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
          "inline-flex items-center px-4 py-2 bg-green-900 border border-transparent rounded-md font-semibold text-2xl text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"  
        }
        onClick={() => {
          hideButton()
        }}
      >
        Start
      </button>}
      </Link>
    );
  }

