import { StylinComponentProps } from '@stylin.js/react';
import { InsHTMLAttributes } from 'react';

export type InsElementProps = Omit<
  InsHTMLAttributes<HTMLModElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface InsProps extends StylinComponentProps, InsElementProps {}
