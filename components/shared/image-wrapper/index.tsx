/* eslint-disable react/jsx-props-no-spreading */

'use client';

import React from 'react';
import { useTheme } from '@/contexts/theme-context';
import Image, { ImageProps } from 'next/image';

type ImageWrapperProp = ImageProps & {
  srcForDarkMode: string;
};

function ImageWrapper({
  src,
  alt,
  srcForDarkMode,
  ...props
}: ImageWrapperProp) {
  const modeState = useTheme();

  const imageSrc = modeState?.theme === 'light' ? src : srcForDarkMode;

  return <Image src={imageSrc!} alt={alt} {...props} />;
}

export default ImageWrapper;
