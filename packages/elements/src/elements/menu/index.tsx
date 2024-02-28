import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MenuElementProps, MenuProps } from './menu.types';

export const stylinMenu = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & MenuElementProps & RefAttributes<MenuElementProps>>('menu')(
    ...styles
  );

const MenuElement = stylinMenu();

export const Menu = forwardRef<MenuElementProps, PropsWithChildren<MenuProps>>((props, ref) => (
  <MenuElement {...props} ref={ref} />
));

Menu.displayName = 'Menu';

export * from './menu.types';
