import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H6ElementProps, H6Props } from './h6.types';

export const stylinH6 = stylin<H6ElementProps & RefAttributes<H6ElementProps>>(
  'h6'
);

const H6Element = stylinH6();

export const H6 = forwardRef<PropsWithChildren<H6Props>>((props, ref) => (
  <H6Element {...props} ref={ref} />
));

H6.displayName = 'H6';

export * from './h6.types';
