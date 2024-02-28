import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { WbrElementProps, WbrProps } from './wbr.types';

export const stylinWbr = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & WbrElementProps & RefAttributes<WbrElementProps>>('wbr')(
    ...styles
  );

const WbrElement = stylinWbr();

export const Wbr = forwardRef<WbrElementProps, WbrProps>((props, ref) => (
  <WbrElement {...props} ref={ref} />
));

Wbr.displayName = 'Wbr';

export * from './wbr.types';
