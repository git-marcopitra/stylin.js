import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { KbdElementProps, KbdProps } from './kbd.types';

export const stylinKbd = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & KbdElementProps & RefAttributes<KbdElementProps>>('kbd')(
    ...styles
  );

const KbdElement = stylinKbd();

export const Kbd = forwardRef<KbdElementProps, PropsWithChildren<KbdProps>>((props, ref) => (
  <KbdElement {...props} ref={ref} />
));

Kbd.displayName = 'Kbd';

export * from './kbd.types';
