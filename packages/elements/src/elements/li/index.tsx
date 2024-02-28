import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { LiElementProps, LiProps } from './li.types';

export const stylinLi = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & LiElementProps & RefAttributes<LiElementProps>>('li')(...styles);

const LiElement = stylinLi();

export const Li = forwardRef<LiElementProps, PropsWithChildren<LiProps>>((props, ref) => (
  <LiElement {...props} ref={ref} />
));

Li.displayName = 'Li';

export * from './li.types';
