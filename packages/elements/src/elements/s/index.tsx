import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SElementProps, SProps } from './s.types';

export const stylinS = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & SElementProps & RefAttributes<SElementProps>>('s')(...styles);

const SElement = stylinS();

export const S = forwardRef<SElementProps, PropsWithChildren<SProps>>((props, ref) => (
  <SElement {...props} ref={ref} />
));

S.displayName = 'S';

export * from './s.types';
