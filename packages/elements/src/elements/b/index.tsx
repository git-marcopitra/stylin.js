import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BElementProps, BProps } from './b.types';

export const stylinB = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & BElementProps & RefAttributes<BElementProps>>('b')(...styles);

const BElement = stylinB();

export const B = forwardRef<BElementProps, PropsWithChildren<BProps>>((props, ref) => (
  <BElement {...props} ref={ref} />
));

B.displayName = 'B';

export * from './b.types';
