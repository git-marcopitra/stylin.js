import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AbbrElementProps, AbbrProps } from './abbr.types';

export const Abbr = forwardRef<PropsWithChildren<AbbrProps>>((props, ref) => {
  const AbbrElement = stylin<
    AbbrElementProps & RefAttributes<AbbrElementProps>
  >('abbr')();

  return <AbbrElement {...props} ref={ref} />;
});

Abbr.displayName = 'Abbr';

export * from './abbr.types';
