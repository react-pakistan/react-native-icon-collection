import React, { ReactElement } from 'react';
import { SvgXml } from 'react-native-svg';
import * as XML from '../xml';

export const Icon = ({
  fill,
  icon,
} : IIconProps) : ReactElement => {
  const iconSvg = XML[icon]();

  return (
    <SvgXml
      fill={fill}
      height="100%"
      width="100%"
      xml={`${iconSvg}`}
    />
  );
};

export interface IIconProps {
  fill? : string;
  icon : string;
}
