import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptionElementProps, OptionProps } from './option.types';

export const stylinOption = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & OptionElementProps & RefAttributes<OptionElementProps>>('option')(
    ...styles
  );

const OptionElement = stylinOption();

export const Option = forwardRef<PropsWithChildren<OptionProps>>(
  (props, ref) => <OptionElement {...props} ref={ref} />
);

Option.displayName = 'Option';

export * from './option.types';
