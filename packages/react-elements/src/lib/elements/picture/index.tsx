import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PictureElementProps, PictureProps } from './picture.types';

const PictureElement = stylin<
  PictureElementProps & RefAttributes<PictureElementProps>
>('picture')();

export const Picture = forwardRef<PropsWithChildren<PictureProps>>(
  (props, ref) => <PictureElement {...props} ref={ref} />
);

Picture.displayName = 'Picture';

export * from './picture.types';
