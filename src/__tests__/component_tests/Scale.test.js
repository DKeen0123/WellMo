import React from 'react';
import { shallow, mount } from 'enzyme';
import Scale from '../../components/Scale';

describe('Scale', () => {
  let scale = shallow(<Scale />);

  it('renders correctly', () => {
    expect(scale).toMatchSnapshot();
  });

  describe('when a user types in a number', () => {
    it('fires the `updateState()` function', () => {
      const mockUpdateState = jest.fn();
      scale = shallow(<Scale updateState={mockUpdateState} />);
      scale.find('#firstScale').simulate('change');
      expect(mockUpdateState).toBeCalled();
    });
  });
});
