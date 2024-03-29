import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { InputElementProps, InputProps } from './input.types';

export const stylinInput = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & InputElementProps & RefAttributes<InputElementProps>>('input')(
    ...styles
  );

const InputElement = stylinInput();

export const Input = forwardRef<InputElementProps, PropsWithChildren<InputProps>>((props, ref) => (
  <InputElement {...props} ref={ref} />
));

Input.displayName = 'Input';

export * from './input.types';
