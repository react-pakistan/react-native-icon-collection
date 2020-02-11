import { theme } from '@react-pakistan/react-commons-collection/theme';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Picker } from '../../src/components/picker';
import { Story, UseCase } from '../views';

// export const defaultTextProps = {
//   color: text('color', theme.colors.paleGreen),
//   fontFamily: text('fontFamily', 'Helvetica'),
//   fontSize: number('fontSize', 32),
//   fontWeight: number('fontWeight', 600),
//   letterSpacing: text('letterSpacing', '1.5'),
//   lineHeight: text('lineHeight', '32'),
//   textAlign: text('textAlign', 'center'),
//   textTransform: text('textTransform', 'uppercase'),
// };

storiesOf('Picker', module)
  .add('data picker', () : ReactElement => (
    <Story>
      <UseCase
        text="Picker => Column direction 2 full children"
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </UseCase>
    </Story>
  ));
