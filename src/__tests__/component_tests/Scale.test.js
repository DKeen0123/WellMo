import React from 'react';
import { shallow } from 'enzyme';
import Scale from '../../components/Scale';

describe('Scale', () => {
  const scale = shallow(<Scale />);

  it('renders correctly', () => {
    expect(scale).toMatchSnapshot();
  });
});
