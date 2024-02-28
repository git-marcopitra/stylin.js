import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H3ElementProps, H3Props } from './h3.types';

const H3Element = stylin<H3ElementProps & RefAttributes<H3ElementProps>>(
  'h3'
)();

export const H3 = forwardRef<PropsWithChildren<H3Props>>((props, ref) => (
  <H3Element {...props} ref={ref} />
));

H3.displayName = 'H3';

export * from './h3.types';
