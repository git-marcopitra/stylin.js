import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TfootElementProps, TfootProps } from './tfoot.types';

export const stylinTfoot = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & TfootElementProps & RefAttributes<TfootElementProps>>('tfoot')(
    ...styles
  );

const TfootElement = stylinTfoot();

export const Tfoot = forwardRef<PropsWithChildren<TfootProps>>((props, ref) => (
  <TfootElement {...props} ref={ref} />
));

Tfoot.displayName = 'Tfoot';

export * from './tfoot.types';
