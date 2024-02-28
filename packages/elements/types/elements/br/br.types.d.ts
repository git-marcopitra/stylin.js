import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type BrElementProps = Omit<HTMLAttributes<HTMLBRElement>, 'color' | 'translate'>;
export interface BrProps extends StylinComponentProps, BrElementProps {
}
