import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigureElementProps, FigureProps } from './figure.types';

const FigureElement = stylin<
  FigureElementProps & RefAttributes<FigureElementProps>
>('figure')();

export const Figure = forwardRef<PropsWithChildren<FigureProps>>(
  (props, ref) => <FigureElement {...props} ref={ref} />
);

Figure.displayName = 'Figure';

export * from './figure.types';
