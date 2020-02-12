import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../components/icon';
// import {
//   defaultTextProps,
// } from '../story/text.story';

describe('Testing Icon component', () => {
  it('matches Icon snapshot,', () => {
    const wrapper = renderer.create(
      <Icon icon="blockchaincolor1" />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
