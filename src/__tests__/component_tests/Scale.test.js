import React from 'react';
import { shallow } from 'enzyme';
import Scale from '../../components/Scale';

describe('Scale', () => {
  const scale = shallow(<Scale />);

  it('renders correctly', () => {
    expect(scale).toMatchSnapshot();
  });

  it('calls a function in the overall form component', () => {
    const mockStateUpdate = jest.fn()
    scale.find('#firstScale').simulate('change', {target: {name: 'moodScale', value: '99'}})
    expect(mockStateUpdate).toHaveBeenCalled();
  });
});
