import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MainElementProps, MainProps } from './main.types';

export const stylinMain = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & MainElementProps & RefAttributes<MainElementProps>>('main')(
    ...styles
  );

const MainElement = stylinMain();

export const Main = forwardRef<PropsWithChildren<MainProps>>((props, ref) => (
  <MainElement {...props} ref={ref} />
));

Main.displayName = 'Main';

export * from './main.types';
