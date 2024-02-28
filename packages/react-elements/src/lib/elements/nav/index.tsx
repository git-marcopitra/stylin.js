import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { NavElementProps, NavProps } from './nav.types';

const NavElement = stylin<NavElementProps & RefAttributes<NavElementProps>>(
  'nav'
)();

export const Nav = forwardRef<PropsWithChildren<NavProps>>((props, ref) => (
  <NavElement {...props} ref={ref} />
));

Nav.displayName = 'Nav';

export * from './nav.types';
