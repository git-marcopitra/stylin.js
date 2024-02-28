import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H2ElementProps, H2Props } from './h1.types';

export const stylinH2 = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & H2ElementProps & RefAttributes<H2ElementProps>>('h2')(...styles);

const H2Element = stylinH2();

export const H2 = forwardRef<PropsWithChildren<H2Props>>((props, ref) => (
  <H2Element {...props} ref={ref} />
));

H2.displayName = 'H2';

export * from './h1.types';
