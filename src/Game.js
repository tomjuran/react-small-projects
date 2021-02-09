import React, { Component } from 'react';
import Results from './components/Results'
  
  class Game extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1 
      });
    }
    render() {
      const expression = Math.random() >= 0.5 ? true : false; 
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
         
  <Results fiftyFifty={expression} />
         
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  }

  export default Game