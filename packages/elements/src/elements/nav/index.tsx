import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { NavElementProps, NavProps } from './nav.types';

export const stylinNav = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & NavElementProps & RefAttributes<NavElementProps>>('nav')(
    ...styles
  );

const NavElement = stylinNav();

export const Nav = forwardRef<NavElementProps, PropsWithChildren<NavProps>>((props, ref) => (
  <NavElement {...props} ref={ref} />
));

Nav.displayName = 'Nav';

export * from './nav.types';
