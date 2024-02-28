import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, RefAttributes } from 'react';

import { AreaElementProps, AreaProps } from './area.types';

export const stylinArea = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & AreaElementProps & RefAttributes<AreaElementProps>>('area')(
    ...styles
  );

const AreaElement = stylinArea();

export const Area = forwardRef<AreaElementProps, AreaProps>((props, ref) => (
  <AreaElement {...props} ref={ref} />
));

Area.displayName = 'Area';

export * from './area.types';
