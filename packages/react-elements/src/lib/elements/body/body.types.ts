import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BodyElementProps = Omit<
  HTMLAttributes<HTMLBodyElement>,
  'color' | 'translate'
>;

export interface BodyProps extends StylinComponentProps, BodyElementProps {}
