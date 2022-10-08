import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';



const styles = {
  headerStyle: {
    background: '#003840',
  
  },
};



function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <Link to="/">
      <h1 className='text-6xl sticky'> 🎬 ScenAntics </h1>
      </Link>
     
    </header>
  );
}

export default Header;