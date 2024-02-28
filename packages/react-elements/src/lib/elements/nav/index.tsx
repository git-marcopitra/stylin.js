import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { NavElementProps, NavProps } from './nav.types';

export const stylinNav = stylin<
  NavElementProps & RefAttributes<NavElementProps>
>('nav');

const NavElement = stylinNav();

export const Nav = forwardRef<PropsWithChildren<NavProps>>((props, ref) => (
  <NavElement {...props} ref={ref} />
));

Nav.displayName = 'Nav';

export * from './nav.types';
