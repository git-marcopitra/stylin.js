import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TdElementProps, TdProps } from './td.types';

const TdElement = stylin<TdElementProps & RefAttributes<TdElementProps>>(
  'td'
)();

export const Td = forwardRef<PropsWithChildren<TdProps>>((props, ref) => (
  <TdElement {...props} ref={ref} />
));

Td.displayName = 'Td';

export * from './td.types';
