import React from "react";
import '../styles/GamePage.css';
import { Link } from "react-router-dom";

class GamePage extends React.Component {
    state = { instructions: '' };

    render() {
        const { instructions } = this.state;
        return (
            <div className="app bg-green-700 min-h-screen">
                <h1 className="heading">
                    {this.state.instructions}
                </h1>
                <div className="container text-2xl text-bolder">
                    <h1 className="text-3xl text-black"> HORROR 🔪<br /><br /><br /> <br /> </h1>
                       <h2 className="text-2xl text-black"> DRINK IF YOU SEE A KNIFE
                        <br />
                        OR
                        <br />
                        IF YOU'RE NOT DRINKING DO 10 PUSH UPS
                        <br />
                        </h2>

                    <div className='flex justify-center'>

                        <button className="btn items-center btn-warning btn-white text-sm w-30 h-2 font-apple-system text-black">NEXT ACTION</button>
                        <Link to="/end">
                            <button className="btn text-center  btn-error text-sm ml-20 w-30 h-2 font-apple-system text-black">QUIT GAME</button>
                        </Link>

                    </div>

                </div>
             
            </div>

        )
    }
}

export default GamePage;