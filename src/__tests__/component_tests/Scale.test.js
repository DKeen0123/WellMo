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
      // const updateStateSpy = jest.spyOn(Scale.prototype, 'updateState');
      const updateStateSpy = jest.fn();
      const event = { target: { name: 'scaleInput', value: 99 } };
      scale = shallow(<Scale updateState={updateStateSpy} />);
      scale.find('#firstScale').simulate('change', event);
      expect(updateStateSpy).toBeCalled();
    });
  });
});
