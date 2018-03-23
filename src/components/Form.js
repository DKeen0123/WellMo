import React, { Component } from 'react';
import Header from './Header';
import ScaleQuestionView from './ScaleQuestionView';
import OutputView from './OutputView';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstScaleScore: undefined,
      savedFirstScaleScore: undefined,
      buttonClicked: false,
    };
  }

  decider() {
      if(this.state.buttonClicked === true) {
          return 'output'
      }
      else return 'scaleQuestion'
  };


  handleTextBoxInput = event => this.setState({ firstScaleScore: event.target.value });
  handleDisplayClick = () => {
    let { firstScaleScore } = this.state;
    this.setState({ savedFirstScaleScore: firstScaleScore, buttonClicked: true });
  };

  render() {
    const VIEWS = {
      scaleQuestion: <ScaleQuestionView handleTextBoxInput={this.handleTextBoxInput} handleDisplayClick={this.handleDisplayClick}/>,
      output: <OutputView score={this.state.savedFirstScaleScore}/>
    }
    return (
      <div>
        <Header />
          {console.log(this.VIEWS)}
          {VIEWS[this.decider()]}
      </div>
    );
  }
}

export default Form;
