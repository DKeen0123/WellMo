import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

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

  it('passes updateState as props to scale Component', () => {
    expect(form.find('Scale').prop('updateState')).toBe(
      form.instance().updateState
    );
  });

  it('passes savedFirstScaleScore as props to Output Component', () => {
    form.setState({ savedFirstScaleScore: '99' });
    expect(form.find('Output').prop('score')).toEqual(
      form.state('savedFirstScaleScore')
    );
  });

  describe('when Scale input is updated', () => {
    it('should update the state to the value of the input', () => {
      const event = { target: { name: 'scaleInput', value: 99 } };
      form.instance().updateState(event);
      expect(form.state('firstScaleScore')).toEqual(99);
    });

    // it('displays output when button is clicked', () => {
    //   const fullFormRender = mount(<Form />, { attachTo: document.body });
    //   fullFormRender.setState({ firstScaleScore: 99 });
    //   fullFormRender.find('#displayButton').prop('onClick')();
    //   expect(fullFormRender.find('#outputBox').text()).toEqual('99');
    // });
  });
});
