import React from 'react';
import renderer from 'react-test-renderer';
import { View } from '../components/view';
import {
  defaultColumnViewProps,
  defaultRowViewProps,
} from '../../__stories__/story/view.story';

describe('Testing A component', () => {
  it('matches A snapshot, flex column', () => {
    const wrapper = renderer.create(
      <View {...defaultColumnViewProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('matches A snapshot, flex row', () => {
    const wrapper = renderer.create(
      <View {...defaultRowViewProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
