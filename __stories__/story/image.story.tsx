import { action } from '@storybook/addon-actions';
import {
  boolean,
  number,
  object,
  text,
} from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React, { ReactElement } from 'react';
import {
  Image,
  ResizeMethod,
  ResizeMode,
} from '../../src/components/image';
import { Story, UseCase } from '../views';

export const imageLocalProps = {
  accessibilityLabel: text('accessibilityLabel', 'Image'),
  accessible: boolean('accessible', false),
  blurRadius: number('blurRadius', 1),
  capInsets: object('capInsets', { top: 0, left: 0, bottom: 0, right: 0 }),
  fadeDuration: number('fadeDuration', 300),
  height: number('height', 100),
  loadingIndicatorSource: [
    require('../../assets/images/react-icon.png'),
    require('../../assets/images/react-icon.png'),
    require('../../assets/images/react-icon.png'),
  ],
  onError: action('onError'),
  onLayout: action('onLayout'),
  onPartialLoad: action('onPartialLoad'),
  onProgress: action('onProgress'),
  onLoad: action('onLoad'),
  onLoadEnd: action('onLoadEnd'),
  onLoadStart: action('onLoadStart'),
  progressiveRenderingEnabled: boolean('progressiveRenderingEnabled', false),
  resizeMethod: ResizeMethod.auto,
  resizeMode: ResizeMode.cover,
  source: require('../../assets/images/react-icon.png'),
  testID: text('testID', 'testID'),
  width: number('width', 100),
};

export const imageUriProps = {
  accessibilityLabel: text('accessibilityLabel', 'Image'),
  accessible: boolean('accessible', false),
  blurRadius: number('blurRadius', 1),
  capInsets: object('capInsets', { top: 0, left: 0, bottom: 0, right: 0 }),
  fadeDuration: number('fadeDuration', 300),
  height: number('height', 100),
  loadingIndicatorSource: [
    require('../../assets/images/react-icon.png'),
    require('../../assets/images/react-icon.png'),
    require('../../assets/images/react-icon.png'),
  ],
  onError: action('onError'),
  onLayout: action('onLayout'),
  onPartialLoad: action('onPartialLoad'),
  onProgress: action('onProgress'),
  onLoad: action('onLoad'),
  onLoadEnd: action('onLoadEnd'),
  onLoadStart: action('onLoadStart'),
  progressiveRenderingEnabled: boolean('progressiveRenderingEnabled', false),
  resizeMethod: ResizeMethod.auto,
  resizeMode: ResizeMode.cover,
  source: { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
  testID: text('testID', 'testID'),
  width: number('width', 100),
};

storiesOf('Image', module)
  .add('image local asset', () : ReactElement => (
    <Story>
      <UseCase
        text="Image => local asset"
        usage={`${JSON.stringify(imageLocalProps)}`}
      >
        <Image {...imageLocalProps} />
      </UseCase>
    </Story>
  ))
  .add('image external aseet', () : ReactElement => (
    <Story>
      <UseCase
        text="Image => external asset"
        usage={`${JSON.stringify(imageUriProps)}`}
      >
        <Image {...imageUriProps} />
      </UseCase>
    </Story>
  ));
