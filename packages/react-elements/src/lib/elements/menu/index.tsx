import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MenuElementProps, MenuProps } from './menu.types';

export const stylinMenu = stylin<
  MenuElementProps & RefAttributes<MenuElementProps>
>('menu');

const MenuElement = stylinMenu();

export const Menu = forwardRef<PropsWithChildren<MenuProps>>((props, ref) => (
  <MenuElement {...props} ref={ref} />
));

Menu.displayName = 'Menu';

export * from './menu.types';
