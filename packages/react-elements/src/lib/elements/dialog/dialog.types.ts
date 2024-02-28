import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type DialogElementProps = Omit<
  HTMLAttributes<HTMLDialogElement>,
  'color' | 'translate'
>;

export interface DialogProps extends StylinComponentProps, DialogElementProps {}
