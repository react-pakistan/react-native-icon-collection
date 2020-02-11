import { theme } from '@react-pakistan/react-commons-collection/theme';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { SafeAreaView } from '../../src/components/safe-area-view';
// import { Text } from '../../src/components/text';
import { Text } from 'react-native';
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

storiesOf('SafeAreaView', module)
  .add('safe area view', () : ReactElement => (
    <Story>
      <UseCase
        text="SafeAreaView => Column direction 2 full children"
        // usage={`${JSON.stringify(defaultTextProps)}`}
      >
        <SafeAreaView>
          <Text>
            Hello World
          </Text>
        </SafeAreaView>
      </UseCase>
    </Story>
  ));
