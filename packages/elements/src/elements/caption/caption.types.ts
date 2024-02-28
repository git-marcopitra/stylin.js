import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type CaptionElementProps = Omit<
  HTMLAttributes<HTMLTableCaptionElement>,
  'color' | 'translate'
>;

export interface CaptionProps
  extends StylinComponentProps,
    CaptionElementProps {}
