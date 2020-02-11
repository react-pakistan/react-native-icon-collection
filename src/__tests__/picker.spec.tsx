import React from 'react';
import renderer from 'react-test-renderer';
import { Picker } from '../components/picker';
// import {
//   defaultTextProps,
// } from '../story/text.story';

describe('Testing Picker component', () => {
  it('matches Picker snapshot,', () => {
    const wrapper = renderer.create(
      <Picker />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
