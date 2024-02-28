import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DelElementProps, DelProps } from './del.types';

export const stylinDel = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DelElementProps & RefAttributes<DelElementProps>>('del')(
    ...styles
  );

const DelElement = stylinDel();

export const Del = forwardRef<PropsWithChildren<DelProps>>((props, ref) => (
  <DelElement {...props} ref={ref} />
));

Del.displayName = 'Del';

export * from './del.types';
