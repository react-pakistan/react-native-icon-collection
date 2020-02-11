import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { TouchableWithoutFeedback } from '../components/touchable-without-feedback';
// import {
// } from '../story/view.story';

describe('Testing TouchableWithoutFeedback component', () => {
  it('matches TouchableWithoutFeedback snapshot', () => {
    const wrapper = renderer.create(
      <TouchableWithoutFeedback>
        <Text>
          Hello World
        </Text>
      </TouchableWithoutFeedback>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
