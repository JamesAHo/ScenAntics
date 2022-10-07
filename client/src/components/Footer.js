import React from 'react';
import '../styles/Footer.css';



const styles = {
  footerStyle: {
    background: '#003840',
  },
footingStyle: {
    fontSize: '20px',
  },
};



function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 className="flex  items-center justify-center" >Drink and Play Responsively<br></br> ©ScenAntics</h1>
      <a className= "absolute bottom-0 right-0" href="https://github.com/JamesAHo/movie-time"><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Github" className="icon"/></a>
    
    </footer>
  );
}

export default Footer;