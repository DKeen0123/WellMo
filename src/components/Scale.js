import React from 'react';

const Scale = props => {
  return (
    <div>
      <input
        id="firstScale"
        type="integer"
        name="scaleInput"
        onChange={props.handleTextBoxInput}
      />
    </div>
  );
};

export default Scale;
