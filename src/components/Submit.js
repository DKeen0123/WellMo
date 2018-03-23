import React from 'react';
import Button from './styledComponents/SubmitButton';

const Submit = props => {
  return (
    <Button id="displayButton" onClick={props.handleDisplayClick}>
      Enter Mood
    </Button>
  );
};

export default Submit;
