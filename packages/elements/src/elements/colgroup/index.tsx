import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColgroupElementProps, ColgroupProps } from './colgroup.types';

export const stylinColgroup = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ColgroupElementProps & RefAttributes<ColgroupElementProps>>(
    'colgroup'
  )(...styles);

const ColgroupElement = stylinColgroup();

export const Colgroup = forwardRef<ColgroupElementProps, PropsWithChildren<ColgroupProps>>(
  (props, ref) => <ColgroupElement {...props} ref={ref} />
);

Colgroup.displayName = 'Colgroup';

export * from './colgroup.types';
