import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { IElementProps, IProps } from './i.types';

export const stylinI = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) => stylin<T & IElementProps & RefAttributes<IElementProps>>('i')(...styles);

const IElement = stylinI();

export const I = forwardRef<IElementProps, PropsWithChildren<IProps>>((props, ref) => (
  <IElement {...props} ref={ref} />
));

I.displayName = 'I';

export * from './i.types';
