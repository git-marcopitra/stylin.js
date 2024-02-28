import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ThElementProps, ThProps } from './th.types';

export const stylinTh = stylin<ThElementProps & RefAttributes<ThElementProps>>(
  'th'
);

const ThElement = stylinTh();

export const Th = forwardRef<PropsWithChildren<ThProps>>((props, ref) => (
  <ThElement {...props} ref={ref} />
));

Th.displayName = 'Th';

export * from './th.types';
