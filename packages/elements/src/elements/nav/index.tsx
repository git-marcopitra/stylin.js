import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { NavElementProps, NavProps } from './nav.types';

export const stylinNav = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & NavElementProps & RefAttributes<NavElementProps>>('nav')(
    ...styles
  );

const NavElement = stylinNav();

export const Nav = forwardRef<PropsWithChildren<NavProps>>((props, ref) => (
  <NavElement {...props} ref={ref} />
));

Nav.displayName = 'Nav';

export * from './nav.types';
