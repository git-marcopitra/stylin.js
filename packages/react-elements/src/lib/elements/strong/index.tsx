import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { StrongElementProps, StrongProps } from './strong.types';

const StrongElement = stylin<
  StrongElementProps & RefAttributes<StrongElementProps>
>('strong')();

export const Strong = forwardRef<PropsWithChildren<StrongProps>>(
  (props, ref) => <StrongElement {...props} ref={ref} />
);

Strong.displayName = 'Strong';

export * from './strong.types';
