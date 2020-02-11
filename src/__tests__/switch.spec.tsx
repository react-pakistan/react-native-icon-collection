import React from 'react';
import renderer from 'react-test-renderer';
import { Switch } from '../components/switch';
// import {
// } from '../story/view.story';

describe('Testing Switch component', () => {
  it('matches Switch snapshot', () => {
    const wrapper = renderer.create(
      <Switch />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
