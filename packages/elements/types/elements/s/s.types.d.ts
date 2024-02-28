import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type SElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface SProps extends StylinComponentProps, SElementProps {
}
