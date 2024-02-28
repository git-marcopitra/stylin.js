import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigcaptionElementProps, FigcaptionProps } from './figcaption.types';

export const stylinFigcaption = stylin<
  FigcaptionElementProps & RefAttributes<FigcaptionElementProps>
>('figcaption');

const FigcaptionElement = stylinFigcaption();

export const Figcaption = forwardRef<PropsWithChildren<FigcaptionProps>>(
  (props, ref) => <FigcaptionElement {...props} ref={ref} />
);

Figcaption.displayName = 'Figcaption';

export * from './figcaption.types';
