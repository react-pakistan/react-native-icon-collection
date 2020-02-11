import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from '../components/touchable-highlight';
// import {
// } from '../story/view.story';

describe('Testing TouchableHighlight component', () => {
  it('matches TouchableHighlight snapshot', () => {
    const wrapper = renderer.create(
      <TouchableHighlight>
        <Text>
          Hello World
        </Text>
      </TouchableHighlight>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
