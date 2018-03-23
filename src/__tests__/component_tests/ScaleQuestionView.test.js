import React from 'react';
import { shallow, mount } from 'enzyme';
import ScaleQuestionView from '../../components/ScaleQuestionView';

describe('ScaleQuestionView', () => {
  let scaleView = shallow(<ScaleQuestionView />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(scaleView).toMatchSnapshot();
    });

    describe('renders all components', () => {
      it('renders a scale component', () => {
        expect(scaleView.find('Scale').exists()).toBe(true);
      });

      it('renders a Question component', () => {
        expect(scaleView.find('Question').exists()).toBe(true);
      });

      it('renders an Submit component', () => {
        expect(scaleView.find('Submit').exists()).toBe(true);
      });
      
    });
  });
});
