import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { TouchableWithoutFeedback } from '../../src/components/touchable-without-feedback';
import { Text } from 'react-native';
import { Story, UseCase } from '../views';

storiesOf('TouchableWithoutFeedback', module)
  .add('touchable without feedback', () : ReactElement => (
    <Story>
      <UseCase
        text="TouchableWithoutFeedback => Column direction 2 full children"
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <TouchableWithoutFeedback>
          <Text>
            Hello World
          </Text>
        </TouchableWithoutFeedback>
      </UseCase>
    </Story>
  ));
