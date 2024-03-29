import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PreElementProps, PreProps } from './pre.types';

export const stylinPre = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & PreElementProps & RefAttributes<PreElementProps>>('pre')(
    ...styles
  );

const PreElement = stylinPre();

export const Pre = forwardRef<PreElementProps, PropsWithChildren<PreProps>>((props, ref) => (
  <PreElement {...props} ref={ref} />
));

Pre.displayName = 'Pre';

export * from './pre.types';
