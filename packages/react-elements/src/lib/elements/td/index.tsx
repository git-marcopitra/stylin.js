import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TdElementProps, TdProps } from './td.types';

export const stylinTd = stylin<TdElementProps & RefAttributes<TdElementProps>>(
  'td'
);

const TdElement = stylinTd();

export const Td = forwardRef<PropsWithChildren<TdProps>>((props, ref) => (
  <TdElement {...props} ref={ref} />
));

Td.displayName = 'Td';

export * from './td.types';
