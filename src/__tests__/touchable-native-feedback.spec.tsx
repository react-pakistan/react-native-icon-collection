import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { TouchableNativeFeedback } from '../components/touchable-native-feedback';
// import {
// } from '../story/view.story';

describe('Testing TouchableNativeFeedback component', () => {
  it('matches TouchableNativeFeedback snapshot', () => {
    const wrapper = renderer.create(
      <TouchableNativeFeedback>
        <Text>
          Hello World
        </Text>
      </TouchableNativeFeedback>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
