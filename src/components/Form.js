import React, { Component } from 'react';
import Scale from './Scale';

class Form extends Component {
  constructor() {
    super();
    this.state = { firstScaleScore: undefined };
  }

  updateState = event => this.setState({ firstScaleScore: event.target.value });

  render() {
    return (
      <div>
        <h1>Form component </h1>
        <Scale updateState={this.updateState}/>
      </div>
    );
  }
}

export default Form;
