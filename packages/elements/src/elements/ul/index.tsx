import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { UlElementProps, UlProps } from './ul.types';

export const stylinUl = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & UlElementProps & RefAttributes<UlElementProps>>('ul')(...styles);

const UlElement = stylinUl();

export const Ul = forwardRef<PropsWithChildren<UlProps>>((props, ref) => (
  <UlElement {...props} ref={ref} />
));

Ul.displayName = 'Ul';

export * from './ul.types';
