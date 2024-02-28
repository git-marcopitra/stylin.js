import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DivElementProps, DivProps } from './div.types';

export const stylinDiv = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DivElementProps & RefAttributes<DivElementProps>>('div')(
    ...styles
  );

const DivElement = stylinDiv();

export const Div = forwardRef<DivElementProps, PropsWithChildren<DivProps>>((props, ref) => (
  <DivElement {...props} ref={ref} />
));

Div.displayName = 'Div';

export * from './div.types';
