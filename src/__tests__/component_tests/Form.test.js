import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

  it('renders correctly', () => {
    expect(form).toMatchSnapshot();
  });

  it('renders a scale component', () => {
    expect(form.find('Scale').exists()).toBe(true);
  });

  it('passes updateState as props to scale Component', () => {
    expect(
      form
        .find('Scale')
        .prop('updateState')).toBe(form.instance().updateState)
  });

  describe('when Scale input is updated', () => {
    it('should update the state to the value of the input', () => {
      const event = { target: { name: 'scaleInput', value: 99 } };
      form.instance().updateState(event);
      expect(form.state('firstScaleScore')).toEqual(99);
    });

    it('displays output when button is clicked', () => {
      console.log(form)
      console.log(document)
      console.log(form.setState({ firstScaleScore: 99 }))
      // document.getElementById('#displayButton');
      console.log(document.getElementById('#outputBox'))
      expect(
        document
          .getElementById('#outputBox').textContent)
          .toEqual(99);
    });
  });
});
