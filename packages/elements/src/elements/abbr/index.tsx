import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AbbrElementProps, AbbrProps } from './abbr.types';

export const stylinAbbr = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & AbbrElementProps & RefAttributes<AbbrElementProps>>('abbr')(
    ...styles
  );

const AbbrElement = stylinAbbr();

export const Abbr = forwardRef<AbbrElementProps, PropsWithChildren<AbbrProps>>((props, ref) => (
  <AbbrElement {...props} ref={ref} />
));

Abbr.displayName = 'Abbr';

export * from './abbr.types';
