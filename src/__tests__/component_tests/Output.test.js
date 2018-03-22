import React from 'react';
import { shallow, mount } from 'enzyme';
import Output from '../../components/Output';

describe('Output', () => {
  const props = { savedFirstScaleScore: '99' };
  let output = shallow(<Output {...props} />);

  it('renders correctly', () => {
    expect(output).toMatchSnapshot();
  });

  it('displays savedFirstScaleScore when passed it as props', () => {
    expect(output.find('#score').text()).toEqual('99');
  });
});
