import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type H4ElementProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  'color' | 'translate'
>;

export interface H4Props extends StylinComponentProps, H4ElementProps {}
