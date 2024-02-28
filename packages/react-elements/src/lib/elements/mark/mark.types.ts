import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type MarkElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface MarkProps extends StylinComponentProps, MarkElementProps {}
