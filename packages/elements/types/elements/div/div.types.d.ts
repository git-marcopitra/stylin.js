import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type DivElementProps = Omit<HTMLAttributes<HTMLDivElement>, 'color' | 'translate'>;
export interface DivProps extends StylinComponentProps, DivElementProps {
}
