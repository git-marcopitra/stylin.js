import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptionElementProps, OptionProps } from './option.types';

export const stylinOption = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & OptionElementProps & RefAttributes<OptionElementProps>>('option')(
    ...styles
  );

const OptionElement = stylinOption();

export const Option = forwardRef<OptionElementProps, PropsWithChildren<OptionProps>>(
  (props, ref) => <OptionElement {...props} ref={ref} />
);

Option.displayName = 'Option';

export * from './option.types';
