import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DetailsElementProps, DetailsProps } from './details.types';

export const stylinDetails = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DetailsElementProps & RefAttributes<DetailsElementProps>>(
    'details'
  )(...styles);

const DetailsElement = stylinDetails();

export const Details = forwardRef<PropsWithChildren<DetailsProps>>(
  (props, ref) => <DetailsElement {...props} ref={ref} />
);

Details.displayName = 'Details';

export * from './details.types';
