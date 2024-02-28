import stylin, { CreateStylinArguments } from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const stylinButton = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & ButtonElementProps & RefAttributes<ButtonElementProps>>('button')(
    ...styles
  );

const ButtonElement = stylinButton();

export const Button = forwardRef<ButtonElementProps, PropsWithChildren<ButtonProps>>(
  (props, ref) => <ButtonElement {...props} ref={ref} />
);

Button.displayName = 'Button';

export * from './button.types';
