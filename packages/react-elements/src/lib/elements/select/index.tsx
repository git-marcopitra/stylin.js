import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SelectElementProps, SelectProps } from './select.types';

const SelectElement = stylin<
  SelectElementProps & RefAttributes<SelectElementProps>
>('select')();

export const Select = forwardRef<PropsWithChildren<SelectProps>>(
  (props, ref) => <SelectElement {...props} ref={ref} />
);

Select.displayName = 'Select';

export * from './select.types';
