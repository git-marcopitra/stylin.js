import { StylinComponentProps } from '@stylin.js/react';
import { ObjectHTMLAttributes } from 'react';

export type ObjectElementProps = Omit<
  ObjectHTMLAttributes<HTMLObjectElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface ObjectProps extends StylinComponentProps, ObjectElementProps {}
