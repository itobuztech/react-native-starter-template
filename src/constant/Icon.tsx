import React from 'react';
import IconPath from '../assets/Icons/IconPath';
import VectorImage from 'react-native-vector-image';

type IconPropsType = {
  width?: number;
  height?: number;
  size: number;
  icon?: string;
  style?: any;
};

export default function Icon({
  width,
  height,
  size,
  icon,
  style,
}: IconPropsType) {
  return (
    <VectorImage
      source={IconPath[icon]}
      width={width || size}
      height={height || size}
      {...style}
    />
  );
}

Icon.defaultProps = {
  size: 18,
};
