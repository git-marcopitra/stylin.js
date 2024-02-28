import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type TitleElementProps = Omit<
  HTMLAttributes<HTMLTitleElement>,
  'color' | 'translate'
>;

export interface TitleProps extends StylinComponentProps, TitleElementProps {}
