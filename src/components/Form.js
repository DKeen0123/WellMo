import React, { Component } from 'react';

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
      </div>
    );
  }
}

export default Form;
