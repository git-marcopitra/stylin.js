import { StylinComponentProps } from '@stylin.js/react';
import { AnchorHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

export type AElementProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'color' | 'translate' | 'content'
>;

export type AProps = StylinComponentProps & AElementProps;
