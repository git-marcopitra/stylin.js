import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AsideElementProps, AsideProps } from './aside.types';

export const Aside = forwardRef<PropsWithChildren<AsideProps>>((props, ref) => {
  const AsideElement = stylin<
    AsideElementProps & RefAttributes<AsideElementProps>
  >('aside')();

  return <AsideElement {...props} ref={ref} />;
});

Aside.displayName = 'Aside';

export * from './aside.types';
