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
      firstScaleScore: 50,
      savedFirstScaleScore: undefined,
      buttonClicked: false
    };
  }

  defaultView = () => {
    return (
      <div>
        <Header />
        <Question />
        <Scale handleTextBoxInput={this.handleTextBoxInput} />
        <p id="scaleValue">{this.state.firstScaleScore}</p>
        <br />
        <Submit handleDisplayClick={this.handleDisplayClick} />
      </div>
    );
  };

  secondView = () => {
    return (
      <div>
        <Header />
        <Question />
        <Output score={this.state.savedFirstScaleScore} />
      </div>
    );
  };

  decider = () => {
    if (this.state.buttonClicked === true) {
      return this.secondView();
    } else return this.defaultView();
  };

  handleTextBoxInput = event =>
    this.setState({ firstScaleScore: event.target.value });
  handleDisplayClick = () => {
    let { firstScaleScore } = this.state;
    this.setState({
      savedFirstScaleScore: firstScaleScore,
      buttonClicked: true
    });
  };

  render() {
    return this.decider();
  }
}

export default Form;
