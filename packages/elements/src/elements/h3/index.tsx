import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { H3ElementProps, H3Props } from './h3.types';

export const stylinH3 = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & H3ElementProps & RefAttributes<H3ElementProps>>('h3')(...styles);

const H3Element = stylinH3();

export const H3 = forwardRef<PropsWithChildren<H3Props>>((props, ref) => (
  <H3Element {...props} ref={ref} />
));

H3.displayName = 'H3';

export * from './h3.types';
