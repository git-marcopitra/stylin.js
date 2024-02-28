import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { AreaElementProps, AreaProps } from './area.types';

export const stylinArea = stylin<
  AreaElementProps & RefAttributes<AreaElementProps>
>('area');

const AreaElement = stylinArea();

export const Area = forwardRef<PropsWithChildren<AreaProps>>((props, ref) => (
  <AreaElement {...props} ref={ref} />
));

Area.displayName = 'Area';

export * from './area.types';
