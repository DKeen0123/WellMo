import React, { Component } from 'react';

const Submit = props => {
    return (
        <button id="displayButton" onClick={props.displayScore}>Enter Mood</button>
    );
}

export default Submit;
