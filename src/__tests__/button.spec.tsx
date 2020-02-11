import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../components/button';
import {
  buttonProps,
} from '../../__stories__/story/button.story';

describe('Testing Button component', () => {
  it('matches Button snapshot, flex column', () => {
    const wrapper = renderer.create(
      <Button {...buttonProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
