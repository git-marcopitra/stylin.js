import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SubElementProps, SubProps } from './sub.types';

export const stylinSub = stylin<
  SubElementProps & RefAttributes<SubElementProps>
>('sub');

const SubElement = stylinSub();

export const Sub = forwardRef<PropsWithChildren<SubProps>>((props, ref) => (
  <SubElement {...props} ref={ref} />
));

Sub.displayName = 'Sub';

export * from './sub.types';
