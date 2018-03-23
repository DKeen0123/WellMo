import React from 'react';
import StyledScale from './styledComponents/Scale';
const Scale = props => {
  return (
    <div>
      <StyledScale
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
