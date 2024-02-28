import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type HeaderElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface HeaderProps extends StylinComponentProps, HeaderElementProps {}
