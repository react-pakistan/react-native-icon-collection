import { ITheme } from '@react-pakistan/react-commons-collection/theme';
import { ReactText } from 'react';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const Text = styled.Text<IText>`
  color: ${({ color, theme } : ThemedStyledProps<IText, ITheme>) : string => color || theme.colors.cherryRed};
  font-family: ${({ fontFamily, theme } : ThemedStyledProps<IText, ITheme>) : string => fontFamily || theme.typography.fontFamily};
  font-size: ${({ fontSize, theme } : ThemedStyledProps<IText, ITheme>) : ReactText => fontSize || theme.typography.fontSizeMenuItem}px;
  font-weight: ${({ fontWeight, theme } : ThemedStyledProps<IText, ITheme>) : ReactText => fontWeight || theme.typography.fontWeightButtonText};
  letter-spacing: ${({ letterSpacing, theme } : ThemedStyledProps<IText, ITheme>) : string => letterSpacing || theme.typography.letterSpacingButtonText}px;
  line-height: ${({ lineHeight, theme } : ThemedStyledProps<IText, ITheme>) : ReactText => lineHeight || theme.typography.lineHeightButtonText}px;
  text-align: ${({ textAlign, theme } : ThemedStyledProps<IText, ITheme>) : string => textAlign || theme.typography.textAlignButtonText};
  text-transform: ${({ textTransform, theme } : ThemedStyledProps<IText, ITheme>) : string => textTransform || theme.typography.textTransformButtonText};
`;

export interface IText {
  /**
   *
   */
  color? : string;
  /**
   *
   */
  fontFamily? : string;
  /**
   *
   */
  fontSize? : ReactText;
  /**
   *
   */
  fontWeight? : ReactText;
  /**
   *
   */
  letterSpacing? : string;
  /**
   *
   */
  lineHeight? : ReactText;
  /**
   *
   */
  textAlign? : string;
  /**
   *
   */
  textTransform? : string;
}
