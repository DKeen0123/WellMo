import React, { Component } from 'react';

const Scale = props => {
    return (
      <div>
        <input
          id="firstScale"
          type="integer"
          name="scaleInput"
          onChange={props.updateState}
        />
      </div>
    );
}

export default Scale;
