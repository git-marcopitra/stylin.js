import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type CodeElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface CodeProps extends StylinComponentProps, CodeElementProps {}
