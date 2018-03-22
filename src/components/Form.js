import React, { Component } from 'react';
import Scale from './Scale';
import Header from './Header';
import Output from './Output';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstScaleScore: undefined,
      savedFirstScaleScore: undefined
    };
  }

  updateState = event => this.setState({ firstScaleScore: event.target.value });
  displayScore = () => {
    let { firstScaleScore } = this.state;
    this.setState({ savedFirstScaleScore: firstScaleScore });
  };

  render() {
    return (
      <div>
        <Header />
        <Scale updateState={this.updateState} />
        <button id="displayButton" onClick={this.displayScore}>
          Enter Mood
        </button>
        <Output score={this.state.savedFirstScaleScore} />
      </div>
    );
  }
}

export default Form;
