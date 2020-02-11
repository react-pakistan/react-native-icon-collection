import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Switch } from '../../src/components/switch';
import { Story, UseCase } from '../views';

storiesOf('Switch', module)
  .add('switch', () : ReactElement => (
    <Story>
      <UseCase
        text="Switch => "
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <Switch />
      </UseCase>
    </Story>
  ));
