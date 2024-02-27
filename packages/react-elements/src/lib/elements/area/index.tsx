import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AreaElementProps, AreaProps } from './area.types';

export const Area = forwardRef<PropsWithChildren<AreaProps>>((props, ref) => {
  const AreaElement = stylin<
    AreaElementProps & RefAttributes<AreaElementProps>
  >('area')();

  return <AreaElement {...props} ref={ref} />;
});

Area.displayName = 'Area';

export * from './area.types';
