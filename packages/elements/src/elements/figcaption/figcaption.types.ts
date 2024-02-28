import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type FigcaptionElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface FigcaptionProps
  extends StylinComponentProps,
    FigcaptionElementProps {}
