import { StylinComponentProps } from '@stylin.js/react';
import { AudioHTMLAttributes } from 'react';
export type AudioElementProps = Omit<AudioHTMLAttributes<HTMLAudioElement>, 'color' | 'translate'>;
export interface AudioProps extends StylinComponentProps, AudioElementProps {
}
