import functions from "daisyui/src/colors/functions";
import React, {useState, useEffect} from "react";

const Countdown = () => {
    const [seconds, setSeconds] = useState(5);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }
    function next() {
        setSeconds(0);
        setIsActive(false);
    }
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds -1);
            }, 1000);
        } else if (!isActive && seconds !== 0){
            clearInterval(interval);
        } return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-7xl sm:text-3xl text 1xl font-black mb-14">GAME INSTRUCTIONS HERE</h1>
            <div className="time">
                {seconds}
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                {isActive ? 'Start': 'Start'}
                </button>
                <button className="button" onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Countdown;