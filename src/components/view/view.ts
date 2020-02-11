import { ITheme } from '@react-pakistan/react-commons-collection/theme';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';

export const View = styled.View`
  align-items: ${({ alignItems } : IView) : string => alignItems || 'center'};
  background-color: ${({ backgroundColor, theme } : ThemedStyledProps<IView, ITheme>) : string => backgroundColor || theme.colors.cherryRed};
  flex-direction: ${({ flexDirection } : IView) : string => flexDirection || 'column'};
  flex: ${({ flex } : IView) : number => flex || 1};
  justify-content: ${({ justifyContent } : IView) : string => justifyContent || 'center'};
`;

export interface IView {
  /**
   * Specifies alignItems for View
   * @default center
   */
  alignItems? : string;
  /**
   * Specifies backgroundColor for View
   * @default theme.color.jcWhite;
   */
  backgroundColor? : string;
  /**
   * Specifies flexDirection for View
   * @default column
   */
  flexDirection? : string;
  /**
   * Specifies flex for View
   * @default 1
   */
  flex? : number;
  /**
   * Specifies justifyContent for View
   * @default center
   */
  justifyContent? : string;
}
