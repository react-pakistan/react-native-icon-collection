import styled from 'styled-components/native';

export const Image = styled.Image`
  height: ${({ height } : IImageProps) : number => height || 100}px;
  width: ${({ width } : IImageProps) : number => width || 100}px;
`;

export interface IImageProps {
  /**
   *
   */
  height : number;
  /**
   *
   */
  width : number;
}

export enum ResizeMode {
  center = 'center',
  contain = 'contain',
  cover = 'cover',
  repeat = 'repeat',
  stretch = 'stretch',
}

export enum ResizeMethod {
  auto = 'auto',
  resize = 'resize',
  scale = 'scale',
}
