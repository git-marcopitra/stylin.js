import { StylinComponentProps } from '@stylin.js/react';
import { MenuHTMLAttributes } from 'react';
export type MenuElementProps = Omit<MenuHTMLAttributes<HTMLMenuElement>, 'color' | 'translate'>;
export interface MenuProps extends StylinComponentProps, MenuElementProps {
}
