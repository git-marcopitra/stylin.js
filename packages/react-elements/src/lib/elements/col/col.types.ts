import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type ColElementProps = Omit<
  HTMLAttributes<HTMLTableColElement>,
  'color' | 'translate'
>;

export interface ColProps extends StylinComponentProps, ColElementProps {}
