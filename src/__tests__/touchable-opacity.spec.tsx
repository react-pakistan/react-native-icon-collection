import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { TouchableOpacity } from '../components/touchable-opacity';
// import {
// } from '../story/view.story';

describe('Testing TouchableOpacity component', () => {
  it('matches TouchableOpacity snapshot', () => {
    const wrapper = renderer.create(
      <TouchableOpacity>
        <Text>
          Hello World
        </Text>
      </TouchableOpacity>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
