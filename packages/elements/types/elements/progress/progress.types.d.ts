import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type ProgressElementProps = Omit<HTMLAttributes<HTMLProgressElement>, 'color' | 'translate'>;
export interface ProgressProps extends StylinComponentProps, ProgressElementProps {
}
