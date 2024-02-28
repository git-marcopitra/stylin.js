import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigureElementProps, FigureProps } from './figure.types';

export const stylinFigure = stylin<
  FigureElementProps & RefAttributes<FigureElementProps>
>('figure');

const FigureElement = stylinFigure();

export const Figure = forwardRef<PropsWithChildren<FigureProps>>(
  (props, ref) => <FigureElement {...props} ref={ref} />
);

Figure.displayName = 'Figure';

export * from './figure.types';
