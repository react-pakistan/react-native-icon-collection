import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { View } from '../../src/components/view';
import { height, width } from '../../src/utils';
import { Story, UseCase } from '../views';

export const defaultColumnViewProps = {
  backgroundColor: text('backgroundColor', 'white'),
  alignItems: text('alignItems', 'center'),
  flex: number('flex', 1),
  flexDirection: text('flexDirection', 'column'),
  justifyContent: text('justifyContent', 'center'),
};

export const defaultRowViewProps = {
  backgroundColor: text('backgroundColor', 'white'),
  alignItems: text('alignItems', 'center'),
  flex: number('flex', 1),
  flexDirection: text('flexDirection', 'row'),
  justifyContent: text('justifyContent', 'center'),
};

storiesOf('View', module)
  .add('column flex', () : ReactElement => (
    <Story>
      <UseCase
        text="View => Column direction 2 full children"
        usage="Checkmate"
      >
        <View {...defaultColumnViewProps}>
          <View style={{ backgroundColor: 'red', width }}>
            <Text style={{ color: 'white' }}>Lorem ipsum nim id est laborum.</Text>
          </View>
          <View style={{ backgroundColor: 'blue', width }}>
            <Text style={{ color: 'white' }}>Lorem ipsum nim id est laborum.</Text>
          </View>
        </View>
      </UseCase>
    </Story>
  ))
  .add('row flex', () : ReactElement => (
    <Story>
      <UseCase
        text="View => Row direction 2 full children"
        usage="Checkmate"
      >
        <View {...defaultRowViewProps} flexDirection="row">
          <View style={{ backgroundColor: 'red', height }}>
            <Text style={{ color: 'white' }}>Lorem ipsum nim id est laborum.</Text>
          </View>
          <View style={{ backgroundColor: 'blue', height }}>
            <Text style={{ color: 'white' }}>Lorem ipsum nim id est laborum.</Text>
          </View>
        </View>
      </UseCase>
    </Story>
  ));
