import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ThElementProps, ThProps } from './th.types';

export const stylinTh = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ThElementProps & RefAttributes<ThElementProps>>('th')(...styles);

const ThElement = stylinTh();

export const Th = forwardRef<ThElementProps, PropsWithChildren<ThProps>>((props, ref) => (
  <ThElement {...props} ref={ref} />
));

Th.displayName = 'Th';

export * from './th.types';
