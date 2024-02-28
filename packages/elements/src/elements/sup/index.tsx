import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SupElementProps, SupProps } from './sup.types';

export const stylinSup = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SupElementProps & RefAttributes<SupElementProps>>('sup')(
    ...styles
  );

const SupElement = stylinSup();

export const Sup = forwardRef<SupElementProps, PropsWithChildren<SupProps>>((props, ref) => (
  <SupElement {...props} ref={ref} />
));

Sup.displayName = 'Sup';

export * from './sup.types';
