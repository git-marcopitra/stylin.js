import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type FooterElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface FooterProps extends StylinComponentProps, FooterElementProps {}
