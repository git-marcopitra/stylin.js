import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { SelectElementProps, SelectProps } from './select.types';

export const stylinSelect = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & SelectElementProps & RefAttributes<SelectElementProps>>('select')(
    ...styles
  );

const SelectElement = stylinSelect();

export const Select = forwardRef<SelectElementProps, PropsWithChildren<SelectProps>>(
  (props, ref) => <SelectElement {...props} ref={ref} />
);

Select.displayName = 'Select';

export * from './select.types';
