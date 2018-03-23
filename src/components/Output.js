import React from 'react';
import StyledOutput from './styledComponents/Output';

const Output = props => {
  return (
    <div>
      <StyledOutput>
        <p id="score">{props.score}</p>
      </StyledOutput>
    </div>
  );
};

export default Output;
