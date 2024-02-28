import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ImgElementProps, ImgProps } from './img.types';

const ImgElement = stylin<ImgElementProps & RefAttributes<ImgElementProps>>(
  'img'
)();

export const Img = forwardRef<PropsWithChildren<ImgProps>>((props, ref) => (
  <ImgElement {...props} ref={ref} />
));

Img.displayName = 'Img';

export * from './img.types';
