import React, { Component } from 'react';
import Scale from './Scale';
import Question from './Question';
import Header from './Header';
import Output from './Output';
import Submit from './Submit';

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
        <Question />
        <Scale updateState={this.updateState}/>
        <Submit displayScore={this.displayScore}/>
        <Output score={this.state.savedFirstScaleScore} />
      </div>
    );
  }
}

export default Form;
