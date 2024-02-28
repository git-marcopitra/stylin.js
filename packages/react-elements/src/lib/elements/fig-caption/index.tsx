import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FigCaptionElementProps, FigCaptionProps } from './fig-caption.types';

const FigCaptionElement = stylin<
  FigCaptionElementProps & RefAttributes<FigCaptionElementProps>
>('figcaption')();

export const FigCaption = forwardRef<PropsWithChildren<FigCaptionProps>>(
  (props, ref) => <FigCaptionElement {...props} ref={ref} />
);

FigCaption.displayName = 'FigCaption';

export * from './fig-caption.types';
