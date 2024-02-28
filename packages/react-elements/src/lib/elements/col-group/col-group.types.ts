import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type ColGroupElementProps = Omit<
  HTMLAttributes<HTMLTableColElement>,
  'color' | 'translate'
>;

export interface ColGroupProps
  extends StylinComponentProps,
    ColGroupElementProps {}
