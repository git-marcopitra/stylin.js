import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AElementProps, AProps } from './a.types';

export const stylinA = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & AElementProps & RefAttributes<AElementProps>>('a')(...styles);

const AElement = stylinA();

export const A = forwardRef<AElementProps, PropsWithChildren<AProps>>(
  (props, ref) => <AElement {...props} ref={ref} />
);

A.displayName = 'A';

export * from './a.types';
