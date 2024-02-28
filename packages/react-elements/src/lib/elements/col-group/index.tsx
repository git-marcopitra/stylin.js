import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ColGroupElementProps, ColGroupProps } from './col-group.types';

export const ColGroup = forwardRef<PropsWithChildren<ColGroupProps>>(
  (props, ref) => {
    const ColGroupElement = stylin<
      ColGroupElementProps & RefAttributes<ColGroupElementProps>
    >('colgroup')();

    return <ColGroupElement {...props} ref={ref} />;
  }
);

ColGroup.displayName = 'ColGroup';

export * from './col-group.types';
