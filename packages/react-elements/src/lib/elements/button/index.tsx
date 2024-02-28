import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const stylinButton = stylin<
  ButtonElementProps & RefAttributes<ButtonElementProps>
>('button');

const ButtonElement = stylinButton();

export const Button = forwardRef<PropsWithChildren<ButtonProps>>(
  (props, ref) => <ButtonElement {...props} ref={ref} />
);

Button.displayName = 'Button';

export * from './button.types';
