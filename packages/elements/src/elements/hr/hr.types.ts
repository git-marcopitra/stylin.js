import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type HrElementProps = Omit<
  HTMLAttributes<HTMLHRElement>,
  'color' | 'translate'
>;

export interface HrProps extends StylinComponentProps, HrElementProps {}
