import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { DatePickerIOS } from '../../src/components/date-picker-ios';
import { Story, UseCase } from '../views';

export const datePickerIOSProps = {
  date: new Date('16 November 1986'),
  initialDate: new Date('09 November 2019'),
  locale: text('locale', 'en'),
  maximumDate: new Date('09 November 2020'),
  minimumDate: new Date('09 November 2019'),
  // minuteInterval: 1,
  // mode: 'datetime',
  onChange: action('onChange'),
  onDateChange: action('onDateChange'),
  timeZoneOffsetInMinutes: number('timeZoneOffsetInMinutes', -5 * 60),
};

storiesOf('DatePickerIOS', module)
  // .addDecorator(((getStory : any)) => <View>{getStory()}</View>)
  .add('date picker ios', () : ReactElement => (
    <Story>
      <UseCase
        text="Date Picker IOS => "
        usage="Checkmate"
      >
        <DatePickerIOS {...datePickerIOSProps} />
      </UseCase>
    </Story>
  ));
