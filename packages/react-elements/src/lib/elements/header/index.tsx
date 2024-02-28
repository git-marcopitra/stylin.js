import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HeaderElementProps, HeaderProps } from './header.types';

export const stylinHeader = stylin<
  HeaderElementProps & RefAttributes<HeaderElementProps>
>('header');

const HeaderElement = stylinHeader();

export const Header = forwardRef<PropsWithChildren<HeaderProps>>(
  (props, ref) => <HeaderElement {...props} ref={ref} />
);

Header.displayName = 'Header';

export * from './header.types';
