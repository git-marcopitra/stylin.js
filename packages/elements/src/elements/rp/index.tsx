import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RpElementProps, RpProps } from './rp.types';

export const stylinRp = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & RpElementProps & RefAttributes<RpElementProps>>('rp')(...styles);

const RpElement = stylinRp();

export const Rp = forwardRef<RpElementProps, PropsWithChildren<RpProps>>((props, ref) => (
  <RpElement {...props} ref={ref} />
));

Rp.displayName = 'Rp';

export * from './rp.types';
