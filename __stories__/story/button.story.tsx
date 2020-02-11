import { theme } from '@react-pakistan/react-commons-collection/theme';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  text,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Button } from '../../src/components/button';
import { Story, UseCase } from '../views';

export const buttonProps = {
  accessibilityLabel: text('accessibilityLabel', 'Press Me'),
  color: text('color', theme.colors.paleGreen),
  disabled: boolean('disabled', false),
  hasTVPreferredFocus: boolean('hasTVPreferredFocus', false),
  nextFocusDown: number('nextFocusDown', 0),
  nextFocusForward: number('nextFocusForward', 0),
  nextFocusLeft: number('nextFocusLeft', 0),
  nextFocusRight: number('nextFocusRight', 0),
  nextFocusUp: number('nextFocusUp', 0),
  onPress: action('onPress'),
  testID: text('testID', 'testID'),
  title: text('title', 'Press Me'),
  touchSoundDisabled: boolean('touchSoundDisabled', false),
};

storiesOf('Button', module)
  .add('button', () : ReactElement => (
    <Story>
      <UseCase
        text="Button => standard"
        usage={`${JSON.stringify(buttonProps)}`}
      >
        <Button {...buttonProps} />
      </UseCase>
    </Story>
  ));
