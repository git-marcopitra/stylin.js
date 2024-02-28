import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type PreElementProps = Omit<HTMLAttributes<HTMLPreElement>, 'color' | 'translate'>;
export interface PreProps extends StylinComponentProps, PreElementProps {
}
