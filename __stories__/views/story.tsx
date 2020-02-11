import React, {
  ReactElement,
  ReactNode,
} from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const StoryWrapper = styled.View`
  flex: 1;
`;

export const Story = ({
  children,
} : IStory) : ReactElement => (
  <StoryWrapper>
    <ScrollView>
      {children}
    </ScrollView>
  </StoryWrapper>
);

interface IStory {
  /**
   * Accepts the ReactNode for Story wrapper
   */
  children : ReactNode;
}
