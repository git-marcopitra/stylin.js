import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DataElementProps, DataProps } from './data.types';

export const Data = forwardRef<PropsWithChildren<DataProps>>((props, ref) => {
  const DataElement = stylin<
    DataElementProps & RefAttributes<DataElementProps>
  >('data')();

  return <DataElement {...props} ref={ref} />;
});

Data.displayName = 'Data';

export * from './data.types';
