import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColGroupElementProps, ColGroupProps } from './col-group.types';

const ColGroupElement = stylin<
  ColGroupElementProps & RefAttributes<ColGroupElementProps>
>('colgroup')();

export const ColGroup = forwardRef<PropsWithChildren<ColGroupProps>>(
  (props, ref) => <ColGroupElement {...props} ref={ref} />
);

ColGroup.displayName = 'ColGroup';

export * from './col-group.types';
