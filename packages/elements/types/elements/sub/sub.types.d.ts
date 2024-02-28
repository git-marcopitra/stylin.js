import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type SubElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface SubProps extends StylinComponentProps, SubElementProps {
}
