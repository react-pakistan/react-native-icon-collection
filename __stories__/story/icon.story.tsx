import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Icon } from '../../src/components/icon';
import { Story, UseCase } from '../views';

storiesOf('Icon', module)
  .add('icon', () : ReactElement => (
    <Story>
      <UseCase
        text="Icon => "
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <Icon icon="blockchaincolor1" />
      </UseCase>
    </Story>
  ));
