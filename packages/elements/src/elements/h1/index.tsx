import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H1ElementProps, H1Props } from './h1.types';

export const stylinH1 = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & H1ElementProps & RefAttributes<H1ElementProps>>('h1')(...styles);

const H1Element = stylinH1();

export const H1 = forwardRef<H1ElementProps, PropsWithChildren<H1Props>>((props, ref) => (
  <H1Element {...props} ref={ref} />
));

H1.displayName = 'H1';

export * from './h1.types';
