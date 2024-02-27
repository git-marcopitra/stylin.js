import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type AElementProps = Omit<
  HTMLAttributes<HTMLAnchorElement>,
  'color' | 'translate' | 'content'
>;

export interface AProps extends StylinComponentProps, AElementProps {}
