import React, { Component } from 'react';
import StyledOutput from './styledComponents/Output';

class Output extends Component {
  randomnessGenerator = strings => {
    return strings[Math.floor(Math.random() * strings.length)];
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
      'accept how you feel. It\'s okay to feel this way',
      'reflect on happy memories',
      'why not call or meet up with someone who will cheer you up?',
      'why not see if exercise can perk you up'
    ];

    const goodFeelings = [
      'reflect on the things you have been doing well for yourself. You can use them to bring you up in future',
      'try and make the most of your positive mood. Enjoy it!',
      'time to recognise how good you feel and relish it'
    ];
    return (
      <div>
        <StyledOutput>
          <p id="score">Your score: {this.props.score}</p>
        </StyledOutput>
        <p id="output-message">
          {this.badGoodDecider(badFeelings, goodFeelings)}
        </p>
      </div>
    );
  }
}

export default Output;
