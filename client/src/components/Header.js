import React from 'react';
import '../styles/Header.css';



const styles = {
  headerStyle: {
    background: '#003840',
  
  },
  headingStyle: {
    fontSize: '50px',
  },
};



function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}> 🎬 ScenAntics 🍻 </h1>
     
    </header>
  );
}

export default Header;