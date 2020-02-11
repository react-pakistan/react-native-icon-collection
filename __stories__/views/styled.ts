import { ITheme } from '@react-pakistan/react-commons-collection/theme';
import { ThemedStyledProps } from 'styled-components';
import styled from 'styled-components/native';
import { height } from '../../src/utils';

export const Root = styled.View`
  flex: 1;
  background-color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.darkGrey};
`;

export const Title = styled.Text`
  color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.skyBlue};
  font-size: 16px;
  font-weight: 600;
`;

export const TitleWrapper = styled.View`
  padding-bottom: 8px;
  padding-top: 8px;
`;

export const UseCaseWrapper = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.darkGrey};
  flex-direction: row;
  left: 0px;
  padding-top: 8px;
  position: absolute;
  right: 0px;
  top: 0px;
`;

export const UseCaseTitle = styled.Text`
  font-size: 12px;
  color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.lightBlack};
  padding-left: 8px;
  padding-right: 4px;
  padding-bottom: 2px;
`;

export const Usage = styled.Text`
  color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.lightBlack};
  font-size: 10px;
  padding-top: 0px;
`;

export const Header = styled.View`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom-color: ${({ theme } : ThemedStyledProps<{}, ITheme>) : string => theme.colors.darkGrey};;
  border-bottom-width: 1px;
`;

export const Component = styled.View<IComponent>`
  flex: 1;
  height: ${height}px;
  background-color: ${({ noBackground } : IComponent) : string => noBackground ? 'rgba(0, 0, 0, 0' : '#FFFFFF'};
  padding: ${({ padding } : IComponent) : string => padding || '20px'};
`;

export interface IComponent {
  /**
   * Specifies the background for Component
   */
  noBackground? : boolean;
  /**
   * Specifies the padding for Component
   */
  padding? : string;
}
