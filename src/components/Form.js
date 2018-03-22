import React, { Component } from 'react';
import Scale from './Scale';
import Header from './Header';

class Form extends Component {
  constructor() {
    super();
    this.state = { firstScaleScore: undefined };
  }

  updateState = event => this.setState({ firstScaleScore: event.target.value });
  displayScore = () => {
    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML = this.state.firstScaleScore;
  };

  render() {
    return (
      <div>
        <Header />
        <Scale updateState={this.updateState} />
        <button id="displayButton" onClick={this.displayScore}>
          Enter Mood
        </button>
        <p id="outputBox" />
      </div>
    );
  }
}

export default Form;
