import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PreElementProps, PreProps } from './pre.types';

export const stylinPre = stylin<
  PreElementProps & RefAttributes<PreElementProps>
>('pre');

const PreElement = stylinPre();

export const Pre = forwardRef<PropsWithChildren<PreProps>>((props, ref) => (
  <PreElement {...props} ref={ref} />
));

Pre.displayName = 'Pre';

export * from './pre.types';
