import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { HeaderElementProps, HeaderProps } from './header.types';

export const stylinHeader = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & HeaderElementProps & RefAttributes<HeaderElementProps>>('header')(
    ...styles
  );

const HeaderElement = stylinHeader();

export const Header = forwardRef<HeaderElementProps, PropsWithChildren<HeaderProps>>(
  (props, ref) => <HeaderElement {...props} ref={ref} />
);

Header.displayName = 'Header';

export * from './header.types';
