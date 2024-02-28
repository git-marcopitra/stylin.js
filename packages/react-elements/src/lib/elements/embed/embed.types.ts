import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type EmbedElementProps = Omit<
  HTMLAttributes<HTMLEmbedElement>,
  'color' | 'translate'
>;

export interface EmbedProps extends StylinComponentProps, EmbedElementProps {}
