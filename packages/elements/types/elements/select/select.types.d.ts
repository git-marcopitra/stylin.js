import { StylinComponentProps } from '@stylin.js/react';
import { SelectHTMLAttributes } from 'react';
export type SelectElementProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'color' | 'translate'>;
export interface SelectProps extends StylinComponentProps, SelectElementProps {
}
