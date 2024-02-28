import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AsideElementProps, AsideProps } from './aside.types';

export const stylinAside = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & AsideElementProps & RefAttributes<AsideElementProps>>('aside')(
    ...styles
  );

const AsideElement = stylinAside();

export const Aside = forwardRef<AsideElementProps, PropsWithChildren<AsideProps>>((props, ref) => (
  <AsideElement {...props} ref={ref} />
));

Aside.displayName = 'Aside';

export * from './aside.types';
