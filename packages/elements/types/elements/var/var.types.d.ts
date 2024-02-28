import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type VarElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface VarProps extends StylinComponentProps, VarElementProps {
}
