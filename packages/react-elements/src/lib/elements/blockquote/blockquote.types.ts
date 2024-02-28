import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BlockquoteElementProps = Omit<
  HTMLAttributes<HTMLQuoteElement>,
  'color' | 'translate'
>;

export interface BlockquoteProps
  extends StylinComponentProps,
    BlockquoteElementProps {}
