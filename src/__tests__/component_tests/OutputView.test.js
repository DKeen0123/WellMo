import React from 'react';
import { shallow, mount } from 'enzyme';
import OutputView from '../../components/OutputView';

describe('OutputView', () => {
  let outputView = shallow(<OutputView />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(outputView).toMatchSnapshot();
    });

    describe('renders all components', () => {

      it('renders a Question component', () => {
        expect(outputView.find('Question').exists()).toBe(true);
      });

      it('renders an output component', () => {
        expect(outputView.find('Output').exists()).toBe(true);
      });

    });
  });
});
