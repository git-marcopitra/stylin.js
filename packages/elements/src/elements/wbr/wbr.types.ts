import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type WbrElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate' | 'width' | 'height'
>;

export interface WbrProps extends StylinComponentProps, WbrElementProps {}
