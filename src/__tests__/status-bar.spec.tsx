import React from 'react';
import renderer from 'react-test-renderer';
import { StatusBar } from '../components/status-bar';
// import {
// } from '../story/view.story';

describe('Testing StatusBar component', () => {
  it('matches StatusBar snapshot', () => {
    const wrapper = renderer.create(
      <StatusBar />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
