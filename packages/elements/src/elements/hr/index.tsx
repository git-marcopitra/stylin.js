import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HrElementProps, HrProps } from './hr.types';

export const stylinHr = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & HrElementProps & RefAttributes<HrElementProps>>('hr')(...styles);

const HrElement = stylinHr();

export const Hr = forwardRef<HrElementProps, HrProps>((props, ref) => (
  <HrElement {...props} ref={ref} />
));

Hr.displayName = 'Hr';

export * from './hr.types';
