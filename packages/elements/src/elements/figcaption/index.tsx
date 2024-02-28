import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigcaptionElementProps, FigcaptionProps } from './figcaption.types';

export const stylinFigcaption = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FigcaptionElementProps & RefAttributes<FigcaptionElementProps>>(
    'figcaption'
  )(...styles);

const FigcaptionElement = stylinFigcaption();

export const Figcaption = forwardRef<FigcaptionElementProps, PropsWithChildren<FigcaptionProps>>(
  (props, ref) => <FigcaptionElement {...props} ref={ref} />
);

Figcaption.displayName = 'Figcaption';

export * from './figcaption.types';
