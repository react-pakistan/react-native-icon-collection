import React, { ReactElement, ReactNode } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

const StoryScreenWrapper = styled.View<IStoryScreenWrapper>`
  background-color: #F7F7F7;
  flex: 1;
`;

const behavior = Platform.OS === 'ios' ? 'padding' : null;

export const StoryScreen = ({
  children,
} : IStoryScreen) : ReactElement => (
  <StoryScreenWrapper
    behavior={behavior}
    keyboardVerticalOffset={50}
  >
    {children}
  </StoryScreenWrapper>
);

interface IStoryScreen {
  /**
   *
   */
  children : ReactNode;
}

interface IStoryScreenWrapper {
  /**
   *
   */
  behavior : string | null;
  /**
   *
   */
  keyboardVerticalOffset : number;
}
