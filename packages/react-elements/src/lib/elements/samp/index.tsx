import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SampElementProps, SampProps } from './samp.types';

const SampElement = stylin<SampElementProps & RefAttributes<SampElementProps>>(
  'samp'
)();

export const Samp = forwardRef<PropsWithChildren<SampProps>>((props, ref) => (
  <SampElement {...props} ref={ref} />
));

Samp.displayName = 'Samp';

export * from './samp.types';
