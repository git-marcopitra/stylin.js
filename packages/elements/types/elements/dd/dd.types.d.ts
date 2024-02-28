import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type DdElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface DdProps extends StylinComponentProps, DdElementProps {
}
