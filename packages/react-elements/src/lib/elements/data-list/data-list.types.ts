import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DataListElementProps = Omit<
  HTMLAttributes<HTMLDataListElement>,
  'color' | 'translate'
>;

export interface DataListProps
  extends StylinComponentProps,
    DataListElementProps {}
