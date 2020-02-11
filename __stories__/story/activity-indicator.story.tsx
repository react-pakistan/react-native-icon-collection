import { theme } from '@react-pakistan/react-commons-collection/theme';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { ActivityIndicator, ActivityIndicatorSize } from '../../src/components/activity-indicator';
import { Story, UseCase } from '../views';

export const activityIndicatorSmallProps = {
  animating: boolean('animating', true),
  color: text('color', theme.colors.paleGreen),
  hidesWhenStopped: boolean('hidesWhenStopped', false),
  size: ActivityIndicatorSize.small,
};

export const activityIndicatorLargeProps = {
  animating: boolean('animating', true),
  color: text('color', theme.colors.paleGreen),
  hidesWhenStopped: boolean('hidesWhenStopped', false),
  size: ActivityIndicatorSize.large,
};

storiesOf('ActivityIndicator', module)
  .add('activity indicator small', () : ReactElement => (
    <Story>
      <UseCase
        text="Activity Indicator => small version"
        usage={`${JSON.stringify(activityIndicatorSmallProps)}`}
      >
        <ActivityIndicator {...activityIndicatorSmallProps} />
      </UseCase>
    </Story>
  ))
  .add('activity indicator large', () : ReactElement => (
    <Story>
      <UseCase
        text="Activity Indicator => large version"
        usage={`${JSON.stringify(activityIndicatorLargeProps)}`}
      >
        <ActivityIndicator {...activityIndicatorLargeProps} />
      </UseCase>
    </Story>
  ));
