import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SampElementProps, SampProps } from './samp.types';

export const stylinSamp = stylin<
  SampElementProps & RefAttributes<SampElementProps>
>('samp');

const SampElement = stylinSamp();

export const Samp = forwardRef<PropsWithChildren<SampProps>>((props, ref) => (
  <SampElement {...props} ref={ref} />
));

Samp.displayName = 'Samp';

export * from './samp.types';
