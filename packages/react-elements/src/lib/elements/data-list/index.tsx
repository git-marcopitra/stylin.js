import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DatalistElementProps, DatalistProps } from './data-list.types';

export const stylinDatalist = stylin<
  DatalistElementProps & RefAttributes<DatalistElementProps>
>('data');

const DatalistElement = stylinDatalist();

export const Datalist = forwardRef<PropsWithChildren<DatalistProps>>(
  (props, ref) => <DatalistElement {...props} ref={ref} />
);

Datalist.displayName = 'Datalist';

export * from './data-list.types';
