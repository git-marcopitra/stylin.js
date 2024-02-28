import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptionElementProps, OptionProps } from './option.types';

export const stylinOption = stylin<
  OptionElementProps & RefAttributes<OptionElementProps>
>('option');

const OptionElement = stylinOption();

export const Option = forwardRef<PropsWithChildren<OptionProps>>(
  (props, ref) => <OptionElement {...props} ref={ref} />
);

Option.displayName = 'Option';

export * from './option.types';
