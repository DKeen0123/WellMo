import React from 'react';
import Question from './Question';
import Output from './Output';

const OutputView = props => {
  return (
    <div>
      <Question />
      <Output score={props.score} />
    </div>
  );
};

export default OutputView;
