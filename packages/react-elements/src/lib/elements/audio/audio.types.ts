import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type AudioElementProps = Omit<
  HTMLAttributes<HTMLAudioElement>,
  'color' | 'translate'
>;

export interface AudioProps extends StylinComponentProps, AudioElementProps {}
