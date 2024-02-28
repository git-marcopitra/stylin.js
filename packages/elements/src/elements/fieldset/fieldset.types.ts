import { StylinComponentProps } from '@stylin.js/react';
import { FieldsetHTMLAttributes } from 'react';

export type FieldsetElementProps = Omit<
  FieldsetHTMLAttributes<HTMLFieldSetElement>,
  'color' | 'translate'
>;

export interface FieldsetProps
  extends StylinComponentProps,
    FieldsetElementProps {}
