import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type FigCaptionElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface FigCaptionProps
  extends StylinComponentProps,
    FigCaptionElementProps {}
