import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SElementProps, SProps } from './s.types';

const SElement = stylin<SElementProps & RefAttributes<SElementProps>>('s')();

export const S = forwardRef<PropsWithChildren<SProps>>((props, ref) => (
  <SElement {...props} ref={ref} />
));

S.displayName = 'S';

export * from './s.types';
