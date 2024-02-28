import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type RubyElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
>;

export interface RubyProps extends StylinComponentProps, RubyElementProps {}
