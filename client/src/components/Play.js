import React from "react";
import history from '../history';

function startButton(){
    <button class="btn-start" onClick={() => history.push('/GamePage')}>Start Game</button>
}

export default startButton;