import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SubElementProps, SubProps } from './sub.types';

const SubElement = stylin<SubElementProps & RefAttributes<SubElementProps>>(
  'sub'
)();

export const Sub = forwardRef<PropsWithChildren<SubProps>>((props, ref) => (
  <SubElement {...props} ref={ref} />
));

Sub.displayName = 'Sub';

export * from './sub.types';
