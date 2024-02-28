import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DataElementProps = Omit<
  HTMLAttributes<HTMLDataElement>,
  'color' | 'translate'
>;

export interface DataProps extends StylinComponentProps, DataElementProps {}
