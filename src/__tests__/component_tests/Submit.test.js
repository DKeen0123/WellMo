import React from 'react';
import { shallow, mount } from 'enzyme';
import Submit from '../../components/Submit';

describe('Submit', () => {
  let submit = shallow(<Submit />);

  it('renders correctly', () => {
    expect(submit).toMatchSnapshot();
  });

  describe('when a user clicks the button', () => {
    it('fires the `handleDisplayClick()` function', () => {
      const mockhandleDisplayClick = jest.fn();
      submit = shallow(<Submit handleDisplayClick={mockhandleDisplayClick} />);
      submit.find('#displayButton').prop('onClick')();
      expect(mockhandleDisplayClick).toBeCalled();
    });
  });
});
