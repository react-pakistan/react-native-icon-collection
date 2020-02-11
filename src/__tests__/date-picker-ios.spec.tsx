import React from 'react';
import renderer from 'react-test-renderer';
import { DatePickerIOS } from '../components/date-picker-ios';
import {
  datePickerIOSProps,
} from '../../__stories__/story/date-picker-ios.story';

describe('Testing DatePickerIOS component', () => {
  it('matches DatePickerIOS snapshot', () => {
    const wrapper = renderer.create(
      <DatePickerIOS {...datePickerIOSProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
