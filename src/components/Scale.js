import React from 'react';
import StyledScale from './styledComponents/Scale';
const Scale = props => {
  return (
    <div>
      <StyledScale
        id="firstScale"
        type="range"
        // value="50"
        min="0"
        max="100"
        name="scaleInput"
        onChange={props.handleTextBoxInput}
      />
    </div>
  );
};

export default Scale;
