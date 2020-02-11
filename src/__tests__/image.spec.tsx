import React from 'react';
import renderer from 'react-test-renderer';
import { Image } from '../components/image';
import {
  imageLocalProps,
  imageUriProps,
} from '../../__stories__/story/image.story';

describe('Testing Image component', () => {
  it('matches Image snapshot, local asset', () => {
    const wrapper = renderer.create(
      <Image {...imageLocalProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('matches Image snapshot, external asset', () => {
    const wrapper = renderer.create(
      <Image {...imageUriProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
