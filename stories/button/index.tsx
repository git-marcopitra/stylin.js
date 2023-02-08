import { CSSProperties } from '@emotion/serialize';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import {
  BorderProps,
  ColorProps,
  FlexProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import stylin from '../../src';

interface ButtonProps
  extends FlexProps,
    GridProps,
    SpaceProps,
    TypographyProps,
    LayoutProps,
    ColorProps,
    BorderProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant: 'primary' | 'secondary';
  outline?: CSSProperties['outline'];
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const StylinButton = stylin<ButtonProps>('button')();

  return <StylinButton type="button" outline="none" border="none" {...props} />;
};
