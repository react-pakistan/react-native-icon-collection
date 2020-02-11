import React from 'react';
import renderer from 'react-test-renderer';
import { SafeAreaView } from '../components/safe-area-view';
// import {
// } from '../story/view.story';

describe('Testing SafeAreaView component', () => {
  it('matches SafeAreaView snapshot', () => {
    const wrapper = renderer.create(
      <SafeAreaView />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
