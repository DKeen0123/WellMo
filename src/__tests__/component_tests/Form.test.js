import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

  it('renders correctly', () => {
    expect(form).toMatchSnapshot();
  })
});