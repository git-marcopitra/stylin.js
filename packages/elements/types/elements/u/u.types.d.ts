import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type UElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface UProps extends StylinComponentProps, UElementProps {
}
