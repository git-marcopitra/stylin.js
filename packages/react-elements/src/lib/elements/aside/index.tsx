import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AsideElementProps, AsideProps } from './aside.types';

export const stylinAside = stylin<
  AsideElementProps & RefAttributes<AsideElementProps>
>('aside');

const AsideElement = stylinAside();

export const Aside = forwardRef<PropsWithChildren<AsideProps>>((props, ref) => (
  <AsideElement {...props} ref={ref} />
));

Aside.displayName = 'Aside';

export * from './aside.types';
