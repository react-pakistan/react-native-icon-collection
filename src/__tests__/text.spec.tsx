import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../components/text';
import {
  defaultTextProps,
} from '../../__stories__/story/text.story';

describe('Testing Text component', () => {
  it('matches Text snapshot, flex column', () => {
    const wrapper = renderer.create(
      <Text {...defaultTextProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
