import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { OptionElementProps, OptionProps } from './option.types';

const OptionElement = stylin<
  OptionElementProps & RefAttributes<OptionElementProps>
>('option')();

export const Option = forwardRef<PropsWithChildren<OptionProps>>(
  (props, ref) => <OptionElement {...props} ref={ref} />
);

Option.displayName = 'Option';

export * from './option.types';
