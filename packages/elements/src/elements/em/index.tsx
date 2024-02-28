import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { EmElementProps, EmProps } from './em.types';

export const stylinEm = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & EmElementProps & RefAttributes<EmElementProps>>('em')(...styles);

const EmElement = stylinEm();

export const Em = forwardRef<PropsWithChildren<EmProps>>((props, ref) => (
  <EmElement {...props} ref={ref} />
));

Em.displayName = 'Em';

export * from './em.types';
