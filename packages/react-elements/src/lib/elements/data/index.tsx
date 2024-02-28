import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DataElementProps, DataProps } from './data.types';

const DataElement = stylin<DataElementProps & RefAttributes<DataElementProps>>(
  'data'
)();

export const Data = forwardRef<PropsWithChildren<DataProps>>((props, ref) => (
  <DataElement {...props} ref={ref} />
));

Data.displayName = 'Data';

export * from './data.types';
