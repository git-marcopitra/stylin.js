import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const Button = forwardRef<PropsWithChildren<ButtonProps>>(
  (props, ref) => {
    const ButtonElement = stylin<
      ButtonElementProps & RefAttributes<ButtonElementProps>
    >('button')();

    return <ButtonElement {...props} ref={ref} />;
  }
);

Button.displayName = 'Button';

export * from './button.types';
