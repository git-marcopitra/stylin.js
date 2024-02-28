import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, RefAttributes } from 'react';

import { ImgElementProps, ImgProps } from './img.types';

export const stylinImg = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ImgElementProps & RefAttributes<ImgElementProps>>('img')(
    ...styles
  );

const ImgElement = stylinImg();

export const Img = forwardRef<ImgElementProps, ImgProps>((props, ref) => (
  <ImgElement {...props} ref={ref} />
));

Img.displayName = 'Img';

export * from './img.types';
