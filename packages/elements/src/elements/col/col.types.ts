import { StylinComponentProps } from '@stylin.js/react';
import { ColHTMLAttributes } from 'react';

export type ColElementProps = Omit<
  ColHTMLAttributes<HTMLTableColElement>,
  'color' | 'translate' | 'width'
>;

export interface ColProps extends StylinComponentProps, ColElementProps {}
