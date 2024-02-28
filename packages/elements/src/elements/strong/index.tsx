import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { StrongElementProps, StrongProps } from './strong.types';

export const stylinStrong = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & StrongElementProps & RefAttributes<StrongElementProps>>('strong')(
    ...styles
  );

const StrongElement = stylinStrong();

export const Strong = forwardRef<StrongElementProps, PropsWithChildren<StrongProps>>(
  (props, ref) => <StrongElement {...props} ref={ref} />
);

Strong.displayName = 'Strong';

export * from './strong.types';
