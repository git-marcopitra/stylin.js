import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { RtElementProps, RtProps } from './rt.types';

export const stylinRt = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & RtElementProps & RefAttributes<RtElementProps>>('rt')(...styles);

const RtElement = stylinRt();

export const Rt = forwardRef<RtElementProps, PropsWithChildren<RtProps>>((props, ref) => (
  <RtElement {...props} ref={ref} />
));

Rt.displayName = 'Rt';

export * from './rt.types';
