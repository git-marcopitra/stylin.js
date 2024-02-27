import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import stylin, { StylinComponentProps, variant } from '../../src';

interface ButtonProps
  extends StylinComponentProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'translate'> {
  variant?: 'default' | 'outline' | 'text' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  shadowDisabled?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  size,
  shadowDisabled,
  variant: indentedVariant,
  ...props
}) => {
  const StylinButton = stylin<ButtonProps>('button')(
    variant({ scale: 'buttons', property: 'variant' }),
    variant({ scale: 'buttonSizes', property: 'size' })
  );

  return (
    <StylinButton
      size={size ?? 'md'}
      variant={indentedVariant ?? 'default'}
      boxShadow={!shadowDisabled ? '0 0 2px #0003' : 'none'}
      {...props}
    />
  );
};
