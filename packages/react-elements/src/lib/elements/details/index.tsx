import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DetailsElementProps, DetailsProps } from './details.types';

export const Details = forwardRef<PropsWithChildren<DetailsProps>>(
  (props, ref) => {
    const DetailsElement = stylin<
      DetailsElementProps & RefAttributes<DetailsElementProps>
    >('details')();

    return <DetailsElement {...props} ref={ref} />;
  }
);

Details.displayName = 'Details';

export * from './details.types';
