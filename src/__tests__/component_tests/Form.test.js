import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../../components/Form';

describe('Form', () => {
  let form = shallow(<Form />);

  describe('Rendering components', () => {
    it('renders correctly', () => {
      expect(form).toMatchSnapshot();
    });

    it('initializes firstScaleScore state at 50', () => {
      expect(form.state('firstScaleScore')).toEqual(50);
      it('renders a header component', () => {
        expect(form.find('Header').exists()).toBe(true);
      });

      describe('button not clicked', () => {
        beforeEach(() => {
          form = shallow(<Form />);
        });
        it('renders ScaleQuestionView component', () => {
          expect(form.find('ScaleQuestionView').exists()).toBe(true);
        });
      });

      describe('button is clicked', () => {
        beforeEach(() => {
          form.setState({ buttonClicked: true });
        });

        it('renders OutputView', () => {
          expect(form.find('OutputView').exists()).toBe(true);
        });
      });

      describe('Prop passing', () => {
        beforeEach(() => {
          form = shallow(<Form />);
        });
        it('passes handleTextBoxInput as props to ScaleQuestionView Component', () => {
          expect(
            form.find('ScaleQuestionView').prop('handleTextBoxInput')
          ).toBe(form.instance().handleTextBoxInput);
        });

        it('passes handleDisplayClick as props to ScaleQuestionView Component', () => {
          expect(
            form.find('ScaleQuestionView').prop('handleDisplayClick')
          ).toBe(form.instance().handleDisplayClick);
        });

        it('passes savedFirstScaleScore as props to OutputView Component', () => {
          form.setState({ savedFirstScaleScore: '99', buttonClicked: true });
          expect(form.find('OutputView').prop('score')).toEqual(
            form.state('savedFirstScaleScore')
          );
        });
      });

      describe('Updating State', () => {
        it('should update the state to the value of the input', () => {
          const event = { target: { name: 'scaleInput', value: 99 } };
          form.instance().handleTextBoxInput(event);
          expect(form.state('firstScaleScore')).toEqual(99);
        });

        it('saves output state when button is clicked', () => {
          form.instance().handleDisplayClick();
          expect(form.state('savedFirstScaleScore')).toEqual(99);
        });

        it('should change the buttonClicked state to true', () => {
          form = shallow(<Form />);
          form.instance().handleDisplayClick();
          expect(form.state('buttonClicked')).toEqual(true);
        });
      });
    });
  });
});
