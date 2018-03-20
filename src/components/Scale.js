import React, { Component } from 'react';

class Scale extends Component {

  render() {
    return (
      <div>
        <h1>Scale component</h1>
        <input
          id="firstScale"
          type="integer"
          name="scaleInput"
          onChange={this.props.updateState}
        />
      </div>
    );
  }
}

export default Scale;
