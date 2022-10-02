import React from 'react';
import '../styles/Genre.css';


const styles = {
  GenreStyle: {
    background: '#003840',
  
  },
GenrefontStyle: {
    fontSize: '50px',
  },
};



function Genre() {
  return (
    <div style={styles.GenreStyle} className="GenreRoom">
      <h1 style={styles.GenrefontStyle}> {user} Select Your Genre:  </h1>
      <ol class="flex flex-nowrap">
          <li >
            HORROR
          </li>
          <li>
            COMEDY
          </li>
          <li>
            ACTION
          </li>
          <li>
            DRAMA
          </li>
          <li>
            ROM-COM
          </li>

      </ol>

   
    </div>
  );
}

export default Genre;