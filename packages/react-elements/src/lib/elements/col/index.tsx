import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColElementProps, ColProps } from './col.types';

const ColElement = stylin<ColElementProps & RefAttributes<ColElementProps>>(
  'col'
)();

export const Col = forwardRef<PropsWithChildren<ColProps>>((props, ref) => (
  <ColElement {...props} ref={ref} />
));

Col.displayName = 'Col';

export * from './col.types';
