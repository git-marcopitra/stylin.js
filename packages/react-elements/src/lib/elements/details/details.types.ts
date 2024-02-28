import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DetailsElementProps = Omit<
  HTMLAttributes<HTMLDetailsElement>,
  'color' | 'translate'
>;

export interface DetailsProps
  extends StylinComponentProps,
    DetailsElementProps {}
