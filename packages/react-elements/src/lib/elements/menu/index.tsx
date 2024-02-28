import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MenuElementProps, MenuProps } from './menu.types';

const MenuElement = stylin<MenuElementProps & RefAttributes<MenuElementProps>>(
  'menu'
)();

export const Menu = forwardRef<PropsWithChildren<MenuProps>>((props, ref) => (
  <MenuElement {...props} ref={ref} />
));

Menu.displayName = 'Menu';

export * from './menu.types';
