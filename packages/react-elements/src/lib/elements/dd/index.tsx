import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DdElementProps, DdProps } from './dd.types';

const DdElement = stylin<DdElementProps & RefAttributes<DdElementProps>>(
  'dd'
)();

export const Dd = forwardRef<PropsWithChildren<DdProps>>((props, ref) => (
  <DdElement {...props} ref={ref} />
));

Dd.displayName = 'Dd';

export * from './dd.types';
