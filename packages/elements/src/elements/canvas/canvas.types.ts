import { StylinComponentProps } from '@stylin.js/react';
import { CanvasHTMLAttributes } from 'react';

export type CanvasElementProps = Omit<
  CanvasHTMLAttributes<HTMLCanvasElement>,
  'color' | 'translate' | 'width' | 'height'
>;

export interface CanvasProps extends StylinComponentProps, CanvasElementProps {}
