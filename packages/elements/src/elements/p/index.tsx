import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PElementProps, PProps } from './p.types';

export const stylinP = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & PElementProps & RefAttributes<PElementProps>>('p')(...styles);

const PElement = stylinP();

export const P = forwardRef<PElementProps, PropsWithChildren<PProps>>((props, ref) => (
  <PElement {...props} ref={ref} />
));

P.displayName = 'P';

export * from './p.types';
