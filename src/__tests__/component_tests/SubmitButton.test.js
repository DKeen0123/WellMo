import React from 'react';
import { shallow, mount } from 'enzyme';
import Submit from '../../components/SubmitButton';

describe('Submit', () => {
  let submit = shallow(<Submit />);

  it('renders correctly', () => {
    expect(submit).toMatchSnapshot();
  });

  describe('when a user clicks the button', () => {
    it('fires the `displayScore()` function', () => {
      const mockDisplayScore = jest.fn();
      submit = shallow(<Submit displayScore={mockDisplayScore} />);
      submit.find('#displayButton').prop('onClick')();
      expect(mockDisplayScore).toBeCalled();
    });
  });
});
