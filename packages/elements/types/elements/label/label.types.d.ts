import { StylinComponentProps } from '@stylin.js/react';
import { LabelHTMLAttributes } from 'react';
export type LabelElementProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'color' | 'translate'>;
export interface LabelProps extends StylinComponentProps, LabelElementProps {
}
