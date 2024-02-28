import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H5ElementProps, H5Props } from './h5.types';

export const stylinH5 = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & H5ElementProps & RefAttributes<H5ElementProps>>('h5')(...styles);

const H5Element = stylinH5();

export const H5 = forwardRef<H5ElementProps, PropsWithChildren<H5Props>>((props, ref) => (
  <H5Element {...props} ref={ref} />
));

H5.displayName = 'H5';

export * from './h5.types';
