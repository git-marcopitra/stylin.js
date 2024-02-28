import { StylinComponentProps } from '@stylin.js/react';
import { ColHTMLAttributes } from 'react';

export type ColGroupElementProps = Omit<
  ColHTMLAttributes<HTMLTableColElement>,
  'color' | 'translate' | 'width'
>;

export interface ColGroupProps
  extends StylinComponentProps,
    ColGroupElementProps {}
