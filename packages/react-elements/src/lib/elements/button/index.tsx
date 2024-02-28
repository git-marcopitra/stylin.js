import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

const ButtonElement = stylin<
  ButtonElementProps & RefAttributes<ButtonElementProps>
>('button')();

export const Button = forwardRef<PropsWithChildren<ButtonProps>>(
  (props, ref) => <ButtonElement {...props} ref={ref} />
);

Button.displayName = 'Button';

export * from './button.types';
