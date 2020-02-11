import React from 'react';
import renderer from 'react-test-renderer';
import { ActivityIndicator } from '../components/activity-indicator';
import {
  activityIndicatorLargeProps,
  activityIndicatorSmallProps,
} from '../../__stories__/story/activity-indicator.story';

describe('Testing ActivityIndicator component', () => {
  it('matches ActivityIndicator snapshot, small version', () => {
    const wrapper = renderer.create(
      <ActivityIndicator {...activityIndicatorSmallProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('matches ActivityIndicator snapshot, large version', () => {
    const wrapper = renderer.create(
      <ActivityIndicator {...activityIndicatorLargeProps} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
