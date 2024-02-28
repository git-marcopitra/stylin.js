import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { KbdElementProps, KbdProps } from './kbd.types';

const KbdElement = stylin<KbdElementProps & RefAttributes<KbdElementProps>>(
  'kbd'
)();

export const Kbd = forwardRef<PropsWithChildren<KbdProps>>((props, ref) => (
  <KbdElement {...props} ref={ref} />
));

Kbd.displayName = 'Kbd';

export * from './kbd.types';
