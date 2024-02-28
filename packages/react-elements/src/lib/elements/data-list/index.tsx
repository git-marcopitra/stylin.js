import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DataListElementProps, DataListProps } from './data-list.types';

export const DataList = forwardRef<PropsWithChildren<DataListProps>>(
  (props, ref) => {
    const DataListElement = stylin<
      DataListElementProps & RefAttributes<DataListElementProps>
    >('data')();

    return <DataListElement {...props} ref={ref} />;
  }
);

DataList.displayName = 'DataList';

export * from './data-list.types';
