import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SelectElementProps, SelectProps } from './select.types';

export const stylinSelect = stylin<
  SelectElementProps & RefAttributes<SelectElementProps>
>('select');

const SelectElement = stylinSelect();

export const Select = forwardRef<PropsWithChildren<SelectProps>>(
  (props, ref) => <SelectElement {...props} ref={ref} />
);

Select.displayName = 'Select';

export * from './select.types';
