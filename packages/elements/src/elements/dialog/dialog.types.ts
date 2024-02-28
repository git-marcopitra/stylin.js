import { StylinComponentProps } from '@stylin.js/react';
import { DialogHTMLAttributes } from 'react';

export type DialogElementProps = Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  'color' | 'translate'
>;

export interface DialogProps extends StylinComponentProps, DialogElementProps {}
