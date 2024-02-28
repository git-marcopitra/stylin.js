import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TheadElementProps, TheadProps } from './thead.types';

export const stylinThead = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TheadElementProps & RefAttributes<TheadElementProps>>('thead')(
    ...styles
  );

const TheadElement = stylinThead();

export const Thead = forwardRef<TheadElementProps, PropsWithChildren<TheadProps>>((props, ref) => (
  <TheadElement {...props} ref={ref} />
));

Thead.displayName = 'Thead';

export * from './thead.types';
