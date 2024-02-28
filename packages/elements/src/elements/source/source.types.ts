import { StylinComponentProps } from '@stylin.js/react';
import { SourceHTMLAttributes } from 'react';

export type SourceElementProps = Omit<
  SourceHTMLAttributes<HTMLSourceElement>,
  'color' | 'translate' | 'width' | 'height'
>;

export interface SourceProps extends StylinComponentProps, SourceElementProps {}
