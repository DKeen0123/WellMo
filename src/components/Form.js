import React, { Component } from 'react';
import Scale from './Scale';

class Form extends Component {
  constructor() {
    super();
    this.state = { hotThought: undefined };
  }

  updateState = event => this.setState({ hotThought: event.target.value });

  render() {
    return (
      <div>
        <h1>Form component </h1>
        <Scale />
      </div>
    );
  }
}

export default Form;
