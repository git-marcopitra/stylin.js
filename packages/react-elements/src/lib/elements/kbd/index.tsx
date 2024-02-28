import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { KbdElementProps, KbdProps } from './kbd.types';

export const stylinKbd = stylin<
  KbdElementProps & RefAttributes<KbdElementProps>
>('kbd');

const KbdElement = stylinKbd();

export const Kbd = forwardRef<PropsWithChildren<KbdProps>>((props, ref) => (
  <KbdElement {...props} ref={ref} />
));

Kbd.displayName = 'Kbd';

export * from './kbd.types';
