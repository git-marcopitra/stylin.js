import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PictureElementProps, PictureProps } from './picture.types';

export const stylinPicture = stylin<
  PictureElementProps & RefAttributes<PictureElementProps>
>('picture');

const PictureElement = stylinPicture();

export const Picture = forwardRef<PropsWithChildren<PictureProps>>(
  (props, ref) => <PictureElement {...props} ref={ref} />
);

Picture.displayName = 'Picture';

export * from './picture.types';
