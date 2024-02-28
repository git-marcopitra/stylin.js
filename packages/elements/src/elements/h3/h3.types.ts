import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type H3ElementProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  'color' | 'translate'
>;

export interface H3Props extends StylinComponentProps, H3ElementProps {}
