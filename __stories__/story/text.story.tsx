import { theme } from '@react-pakistan/react-commons-collection/theme';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Text } from '../../src/components/text';
import { Story, UseCase } from '../views';

export const defaultTextProps = {
  color: text('color', theme.colors.paleGreen),
  fontFamily: text('fontFamily', 'Helvetica'),
  fontSize: number('fontSize', 32),
  fontWeight: number('fontWeight', 600),
  letterSpacing: text('letterSpacing', '1.5'),
  lineHeight: text('lineHeight', '32'),
  textAlign: text('textAlign', 'center'),
  textTransform: text('textTransform', 'uppercase'),
};

storiesOf('Text', module)
  .add('custom color', () : ReactElement => (
    <Story>
      <UseCase
        text="Text => Column direction 2 full children"
        usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <Text {...defaultTextProps}>
          Text
        </Text>
      </UseCase>
    </Story>
  ));
