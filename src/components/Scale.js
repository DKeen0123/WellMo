import React from 'react';

const Scale = props => {
  return (
    <div>
      <input
        id="firstScale"
        type="number"
        min="0"
        max="100"
        name="scaleInput"
        onChange={props.handleTextBoxInput}
      />
    </div>
  );
};

export default Scale;
