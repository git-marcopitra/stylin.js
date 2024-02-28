import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PreElementProps, PreProps } from './pre.types';

const PreElement = stylin<PreElementProps & RefAttributes<PreElementProps>>(
  'pre'
)();

export const Pre = forwardRef<PropsWithChildren<PreProps>>((props, ref) => (
  <PreElement {...props} ref={ref} />
));

Pre.displayName = 'Pre';

export * from './pre.types';
