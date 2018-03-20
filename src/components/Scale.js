import React, { Component } from 'react';

class Scale extends Component {

  stateUpdate = () => console.log(1);

  render() {
    return (
      <div>
        <h1>Scale component</h1>
      <input
        id='firstScale'
        onChange={this.stateUpdate}
        type='number'
        name ='moodScale'
        min='0'
        max='100'
        />
      </div>
    );
  }
}

export default Scale;
