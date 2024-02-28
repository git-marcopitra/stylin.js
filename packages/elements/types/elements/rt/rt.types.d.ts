import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type RtElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface RtProps extends StylinComponentProps, RtElementProps {
}
