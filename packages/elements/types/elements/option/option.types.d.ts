import { StylinComponentProps } from '@stylin.js/react';
import { OptionHTMLAttributes } from 'react';
export type OptionElementProps = Omit<OptionHTMLAttributes<HTMLOptionElement>, 'color' | 'translate'>;
export interface OptionProps extends StylinComponentProps, OptionElementProps {
}
