import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColElementProps, ColProps } from './col.types';

export const stylinCol = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ColElementProps & RefAttributes<ColElementProps>>('col')(
    ...styles
  );

const ColElement = stylinCol();

export const Col = forwardRef<ColElementProps, PropsWithChildren<ColProps>>((props, ref) => (
  <ColElement {...props} ref={ref} />
));

Col.displayName = 'Col';

export * from './col.types';
