import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      
      return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
      
    }
  };
  export default Results