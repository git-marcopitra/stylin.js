import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type CanvasElementProps = Omit<
  HTMLAttributes<HTMLCanvasElement>,
  'color' | 'translate'
>;

export interface CanvasProps extends StylinComponentProps, CanvasElementProps {}
