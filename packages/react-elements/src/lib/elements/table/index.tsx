import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TableElementProps, TableProps } from './table.types';

export const stylinTable = stylin<
  TableElementProps & RefAttributes<TableElementProps>
>('table');

const TableElement = stylinTable();

export const Table = forwardRef<PropsWithChildren<TableProps>>((props, ref) => (
  <TableElement {...props} ref={ref} />
));

Table.displayName = 'Table';

export * from './table.types';
