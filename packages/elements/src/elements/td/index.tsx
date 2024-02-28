import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TdElementProps, TdProps } from './td.types';

export const stylinTd = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TdElementProps & RefAttributes<TdElementProps>>('td')(...styles);

const TdElement = stylinTd();

export const Td = forwardRef<PropsWithChildren<TdProps>>((props, ref) => (
  <TdElement {...props} ref={ref} />
));

Td.displayName = 'Td';

export * from './td.types';
