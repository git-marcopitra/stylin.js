import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type PElementProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  'color' | 'translate'
>;

export interface PProps extends StylinComponentProps, PElementProps {}
