import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SElementProps, SProps } from './s.types';

export const stylinS = stylin<SElementProps & RefAttributes<SElementProps>>(
  's'
);

const SElement = stylinS();

export const S = forwardRef<PropsWithChildren<SProps>>((props, ref) => (
  <SElement {...props} ref={ref} />
));

S.displayName = 'S';

export * from './s.types';
