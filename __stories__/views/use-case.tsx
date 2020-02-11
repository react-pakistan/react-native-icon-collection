import React, {
  ReactElement,
  ReactNode,
} from 'react';
import {
  Component,
  Header,
  Root,
  Title,
  TitleWrapper,
  Usage,
  UseCaseTitle,
  UseCaseWrapper,
} from './styled';

export const UseCase = ({
  children,
  text,
  usage,
  ...rest
} : IUseCase) : ReactElement => (
  <Root>
    <Header>
      <UseCaseWrapper>
        <UseCaseTitle>Use Case</UseCaseTitle>
      </UseCaseWrapper>
      <TitleWrapper>
        <Title>{text}</Title>
      </TitleWrapper>
      {
        usage ? (
          <Usage>
            {usage}
          </Usage>
        ) :
        null
      }
    </Header>
    <Component
      {...rest}
    >
      {children}
    </Component>
  </Root>
);

export interface IUseCase {
  /**
   * Accepts the ReactNode for Component wrapper
   */
  children : ReactNode;
  /**
   * Specifies the Title for UseCase
   */
  text : string;
  /**
   * Specifies the name of the Usage
   */
  usage? : string;
}
