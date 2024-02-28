import { StylinComponentProps } from '@stylin.js/react';
import { AreaHTMLAttributes } from 'react';
export type AreaElementProps = Omit<AreaHTMLAttributes<HTMLAreaElement>, 'color' | 'translate'>;
export interface AreaProps extends StylinComponentProps, AreaElementProps {
}
