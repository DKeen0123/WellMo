import React from 'react';
import { shallow, mount } from 'enzyme';
import Question from '../../components/Question';

describe('Question', () => {
  let question = shallow(<Question />);

  it('renders correctly', () => {
    expect(question).toMatchSnapshot();
  });

});
