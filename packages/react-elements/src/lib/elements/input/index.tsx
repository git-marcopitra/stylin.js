import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { InputElementProps, InputProps } from './input.types';

const InputElement = stylin<
  InputElementProps & RefAttributes<InputElementProps>
>('input')();

export const Input = forwardRef<PropsWithChildren<InputProps>>((props, ref) => (
  <InputElement {...props} ref={ref} />
));

Input.displayName = 'Input';

export * from './input.types';
