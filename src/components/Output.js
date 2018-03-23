import React, { Component } from 'react';
import StyledOutput from './styledComponents/Output';

class Output extends Component {
  randomnessGenerator = strings => {
    let string = strings[Math.floor(Math.random() * strings.length)];
    return string;
  };

  badGoodDecider = (badFeelings, goodFeelings) => {
    if (this.props.score > 65) {
      return (
        'You are feeling pretty good right now, ' +
        this.randomnessGenerator(goodFeelings)
      );
    } else {
      return (
        'You are not feeling your best right now, ' +
        this.randomnessGenerator(badFeelings)
      );
    }
  };
  render() {
    const badFeelings = [
      'why not take some time to do something that you know helps you get back to your best',
      'accept how you feel. You feel how you feel and that is OK',
      'think back to a happier time'
    ];

    const goodFeelings = [
      'reflect on the things you have been doing well for yourself, so you can use them to bring you up in future',
      'try and make the most of your positive mood. Why not do some exercise?',
      'time to recognise how good you feel and relish it'
    ];
    return (
      <div>
        <StyledOutput>
          <p id="score">{this.props.score}</p>
        </StyledOutput>
        <p>{this.badGoodDecider(badFeelings, goodFeelings)}</p>
      </div>
    );
  }
}

export default Output;
