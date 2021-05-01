import React, { ReactElement, memo } from 'react';
import { SvgXml } from 'react-native-svg';

export const Icon = memo(({
  fill,
  icon,
  ...rest
} : IIconProps) : ReactElement => {
  const iconSvg = require('../xml')[icon]();

  return (
    <SvgXml
      fill={fill}
      height="100%"
      width="100%"
      xml={`${iconSvg}`}
      {...rest}
    />
  );
});

export interface IIconProps {
  fill? : string;
  icon : string;
}
