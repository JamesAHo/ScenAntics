import React from 'react';
import '../styles/Header.css';



const styles = {
  headerStyle: {
    background: '#003840',
  
  },
};



function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 className=''> 🎬 ScenAntics </h1>
     
    </header>
  );
}

export default Header;