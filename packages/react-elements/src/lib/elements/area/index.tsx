import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AreaElementProps, AreaProps } from './area.types';

const AreaElement = stylin<AreaElementProps & RefAttributes<AreaElementProps>>(
  'area'
)();

export const Area = forwardRef<PropsWithChildren<AreaProps>>((props, ref) => (
  <AreaElement {...props} ref={ref} />
));

Area.displayName = 'Area';

export * from './area.types';
