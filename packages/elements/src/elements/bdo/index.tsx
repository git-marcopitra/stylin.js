import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BdoElementProps, BdoProps } from './bdo.types';

export const stylinBdo = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & BdoElementProps & RefAttributes<BdoElementProps>>('bdo')(
    ...styles
  );

const BdoElement = stylinBdo();

export const Bdo = forwardRef<BdoElementProps, PropsWithChildren<BdoProps>>((props, ref) => (
  <BdoElement {...props} ref={ref} />
));

Bdo.displayName = 'Bdo';

export * from './bdo.types';
