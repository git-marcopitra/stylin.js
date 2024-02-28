import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DtElementProps, DtProps } from './dt.types';

export const stylinDt = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DtElementProps & RefAttributes<DtElementProps>>('dt')(...styles);

const DtElement = stylinDt();

export const Dt = forwardRef<DtElementProps, PropsWithChildren<DtProps>>((props, ref) => (
  <DtElement {...props} ref={ref} />
));

Dt.displayName = 'Dt';

export * from './dt.types';
