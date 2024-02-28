import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DdElementProps, DdProps } from './dd.types';

export const stylinDd = stylin<DdElementProps & RefAttributes<DdElementProps>>(
  'dd'
);

const DdElement = stylinDd();

export const Dd = forwardRef<PropsWithChildren<DdProps>>((props, ref) => (
  <DdElement {...props} ref={ref} />
));

Dd.displayName = 'Dd';

export * from './dd.types';
