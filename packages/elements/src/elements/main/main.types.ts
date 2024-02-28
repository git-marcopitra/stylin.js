import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type MainElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface MainProps extends StylinComponentProps, MainElementProps {}
