import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type H2ElementProps = Omit<
  HTMLAttributes<HTMLHeadingElement>,
  'color' | 'translate'
>;

export interface H2Props extends StylinComponentProps, H2ElementProps {}
