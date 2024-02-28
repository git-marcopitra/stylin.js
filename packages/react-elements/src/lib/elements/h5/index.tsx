import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H5ElementProps, H5Props } from './h5.types';

const H5Element = stylin<H5ElementProps & RefAttributes<H5ElementProps>>(
  'h5'
)();

export const H5 = forwardRef<PropsWithChildren<H5Props>>((props, ref) => (
  <H5Element {...props} ref={ref} />
));

H5.displayName = 'H5';

export * from './h5.types';
