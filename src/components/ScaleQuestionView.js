import React from 'react';
import Scale from './Scale';
import Question from './Question';
import Submit from './Submit';

const ScaleQuestionView = props => {
  return(
      <div>
          <Question />
          <Scale handleTextBoxInput={props.handleTextBoxInput}/>
          <Submit handleDisplayClick={props.handleDisplayClick}/>
      </div>
  );
};

export default ScaleQuestionView;
