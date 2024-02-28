import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { MainElementProps, MainProps } from './main.types';

const MainElement = stylin<MainElementProps & RefAttributes<MainElementProps>>(
  'main'
)();

export const Main = forwardRef<PropsWithChildren<MainProps>>((props, ref) => (
  <MainElement {...props} ref={ref} />
));

Main.displayName = 'Main';

export * from './main.types';