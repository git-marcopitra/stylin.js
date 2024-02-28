import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type SmallElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface SmallProps extends StylinComponentProps, SmallElementProps {}
