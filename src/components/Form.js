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

  handleTextBoxInput = event => this.setState({ firstScaleScore: event.target.value });
  handleDisplayClick = () => {
    let { firstScaleScore } = this.state;
    this.setState({ savedFirstScaleScore: firstScaleScore });
  };

  render() {
    return (
      <div>
        <Header />
        <Question />
        <Scale handleTextBoxInput={this.handleTextBoxInput}/>
        <Submit handleDisplayClick={this.handleDisplayClick}/>
        <Output score={this.state.savedFirstScaleScore}/>
      </div>
    );
  }
}

export default Form;
