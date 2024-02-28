import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PictureElementProps, PictureProps } from './picture.types';

export const stylinPicture = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & PictureElementProps & RefAttributes<PictureElementProps>>(
    'picture'
  )(...styles);

const PictureElement = stylinPicture();

export const Picture = forwardRef<PictureElementProps, PropsWithChildren<PictureProps>>(
  (props, ref) => <PictureElement {...props} ref={ref} />
);

Picture.displayName = 'Picture';

export * from './picture.types';
