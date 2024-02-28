import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { DatalistElementProps, DatalistProps } from './datalist.types';

export const stylinDatalist = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & DatalistElementProps & RefAttributes<DatalistElementProps>>(
    'datalist'
  )(...styles);

const DatalistElement = stylinDatalist();

export const Datalist = forwardRef<DatalistElementProps, PropsWithChildren<DatalistProps>>(
  (props, ref) => <DatalistElement {...props} ref={ref} />
);

Datalist.displayName = 'Datalist';

export * from './datalist.types';
