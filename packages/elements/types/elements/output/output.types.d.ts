import { StylinComponentProps } from '@stylin.js/react';
import { OutputHTMLAttributes } from 'react';
export type OutputElementProps = Omit<OutputHTMLAttributes<HTMLOutputElement>, 'color' | 'translate'>;
export interface OutputProps extends StylinComponentProps, OutputElementProps {
}
