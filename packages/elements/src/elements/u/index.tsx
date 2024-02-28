import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { UElementProps, UProps } from './u.types';

export const stylinU = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & UElementProps & RefAttributes<UElementProps>>('u')(...styles);

const UElement = stylinU();

export const U = forwardRef<UElementProps, PropsWithChildren<UProps>>((props, ref) => (
  <UElement {...props} ref={ref} />
));

U.displayName = 'U';

export * from './u.types';
