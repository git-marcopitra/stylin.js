import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type TbodyElementProps = Omit<
  HTMLAttributes<HTMLTableSectionElement>,
  'color' | 'translate'
>;

export interface TbodyProps extends StylinComponentProps, TbodyElementProps {}
