import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { PreElementProps, PreProps } from './pre.types';

export const stylinPre = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & PreElementProps & RefAttributes<PreElementProps>>('pre')(
    ...styles
  );

const PreElement = stylinPre();

export const Pre = forwardRef<PropsWithChildren<PreProps>>((props, ref) => (
  <PreElement {...props} ref={ref} />
));

Pre.displayName = 'Pre';

export * from './pre.types';
