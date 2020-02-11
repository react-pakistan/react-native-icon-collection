import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { TouchableHighlight } from '../../src/components/touchable-highlight';
import { Text } from 'react-native';
import { Story, UseCase } from '../views';

storiesOf('TouchableHighlight', module)
  .add('touchable highlight', () : ReactElement => (
    <Story>
      <UseCase
        text="TouchableHighlight => Column direction 2 full children"
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <TouchableHighlight>
          <Text>
            Hello World
          </Text>
        </TouchableHighlight>
      </UseCase>
    </Story>
  ));
