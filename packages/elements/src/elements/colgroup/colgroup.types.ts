import { StylinComponentProps } from '@stylin.js/react';
import { ColHTMLAttributes } from 'react';

export type ColgroupElementProps = Omit<
  ColHTMLAttributes<HTMLTableColElement>,
  'color' | 'translate' | 'width'
>;

export interface ColgroupProps
  extends StylinComponentProps,
    ColgroupElementProps {}
