import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type AbbrElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface AbbrProps extends StylinComponentProps, AbbrElementProps {
}
