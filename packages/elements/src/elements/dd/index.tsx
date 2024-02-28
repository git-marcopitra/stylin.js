import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DdElementProps, DdProps } from './dd.types';

export const stylinDd = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DdElementProps & RefAttributes<DdElementProps>>('dd')(...styles);

const DdElement = stylinDd();

export const Dd = forwardRef<DdElementProps, PropsWithChildren<DdProps>>((props, ref) => (
  <DdElement {...props} ref={ref} />
));

Dd.displayName = 'Dd';

export * from './dd.types';
