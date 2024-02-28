import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AbbrElementProps, AbbrProps } from './abbr.types';

export const stylinAbbr = stylin<
  AbbrElementProps & RefAttributes<AbbrElementProps>
>('abbr');

const AbbrElement = stylinAbbr();

export const Abbr = forwardRef<PropsWithChildren<AbbrProps>>((props, ref) => (
  <AbbrElement {...props} ref={ref} />
));

Abbr.displayName = 'Abbr';

export * from './abbr.types';
