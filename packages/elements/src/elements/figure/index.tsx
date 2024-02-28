import stylin, { CreateStylinArguments } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigureElementProps, FigureProps } from './figure.types';

export const stylinFigure = <T extends Record<string, unknown>>(
  ...styles: CreateStylinArguments
) =>
  stylin<T & FigureElementProps & RefAttributes<FigureElementProps>>('figure')(
    ...styles
  );

const FigureElement = stylinFigure();

export const Figure = forwardRef<FigureElementProps, PropsWithChildren<FigureProps>>(
  (props, ref) => <FigureElement {...props} ref={ref} />
);

Figure.displayName = 'Figure';

export * from './figure.types';
