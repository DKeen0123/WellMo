import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);
  it('renders correctly', () => {
    expect(form).toMatchSnapshot();
  });

  describe('when Scale input is updated', () => {
    it('should update the state to the value of the input', () => {
      const event = { target: { name: 'scaleInput', value: 99 } };
      const finState = form.instance().updateState(event);
      expect(form.state('hotThought')).toEqual(99);
    });
  });
});
