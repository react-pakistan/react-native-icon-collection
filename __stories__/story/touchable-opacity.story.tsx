import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { TouchableOpacity } from '../../src/components/touchable-opacity';
import { Text } from 'react-native';
import { Story, UseCase } from '../views';

storiesOf('TouchableOpacity', module)
  .add('touchable opacity', () : ReactElement => (
    <Story>
      <UseCase
        text="TouchableOpacity => Column direction 2 full children"
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <TouchableOpacity>
          <Text>
            Hello World
          </Text>
        </TouchableOpacity>
      </UseCase>
    </Story>
  ));
