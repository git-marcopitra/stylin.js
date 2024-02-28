import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type CiteElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface CiteProps extends StylinComponentProps, CiteElementProps {}
