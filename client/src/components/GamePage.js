import React from "react";
import '../styles/GamePage.css';

class GamePage extends React.Component {
    state = { instructions: ''};

  render() {
      const { instructions } = this.state;
      return (
          <div className="app">
              <h1 className="heading">
                  {this.state.instructions}
              </h1>
              <button className="button">
                  <span> HORROR <br/><br/><br/> <br/></span>
                  <span>DRINK WHEN you see a knife</span>
                  <span className="drink"> <br/><br/>Next Action</span>
              </button>
          </div>
      )
  }
}

export default GamePage;