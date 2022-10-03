import React from 'react';





function Start() {
    return (
      <div className="start">
        <h1> Invite Your Buddies: {users} </h1>
        <a className="Upload" class="flex flex-nowrap">
       <input class='input' placeholder='How it Started: Upload Photo Here'></input> 
       <button class= "button" type='Upload'>Upload</button>
         </a>
         <p> Rules: </p>

         <button class="start-button">START</button>
            </div>     
    );
}
export default Start;