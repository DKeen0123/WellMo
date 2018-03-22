import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(form).toMatchSnapshot();
    });

    it('renders a scale component', () => {
      expect(form.find('Scale').exists()).toBe(true);
    });

    it('renders a header component', () => {
      expect(form.find('Header').exists()).toBe(true);
    });

    it('renders an output component', () => {
      expect(form.find('Output').exists()).toBe(true);
    });

    it('renders a Question component', () => {
      expect(form.find('Question').exists()).toBe(true);
    });

    it('renders an Submit component', () => {
      expect(form.find('Submit').exists()).toBe(true);
    });
  })  

  describe('Prop passing', () => {
    it('passes updateState as props to scale Component', () => {
      expect(form.find('Scale').prop('updateState')).toBe(
        form.instance().updateState
      );
    });

    it('passes displayScore as props to submit Component', () => {
      expect(form.find('Submit').prop('displayScore')).toBe(
        form.instance().displayScore
      );
    });

    it('passes savedFirstScaleScore as props to Output Component', () => {
      form.setState({ savedFirstScaleScore: '99' });
      expect(form.find('Output').prop('score')).toEqual(
        form.state('savedFirstScaleScore')
      );
    });
  })

  describe('when Scale input is updated', () => {
    it('should update the state to the value of the input', () => {
      const event = { target: { name: 'scaleInput', value: 99 } };
      form.instance().updateState(event);
      expect(form.state('firstScaleScore')).toEqual(99);
    });

    it('displays output when button is clicked', () => {
      form.instance().displayScore();
      expect(form.state('savedFirstScaleScore')).toEqual(99);
    });
  });
});
