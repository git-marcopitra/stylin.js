import { StylinComponentProps } from '@stylin.js/react';
import { OlHTMLAttributes } from 'react';

export type OlElementProps = Omit<
  OlHTMLAttributes<HTMLOListElement>,
  'color' | 'translate'
>;

export interface OlProps extends StylinComponentProps, OlElementProps {}
