import React from 'react';
import StyledOutput from './styledComponents/Output';

const Output = props => {
  return (
    <div>
      <StyledOutput id="score">{props.score}</StyledOutput>
    </div>
  );
};

export default Output;
