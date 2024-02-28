import { StylinComponentProps } from '@stylin.js/react';
import { FormHTMLAttributes } from 'react';
export type FormElementProps = Omit<FormHTMLAttributes<HTMLFormElement>, 'color' | 'translate'>;
export interface FormProps extends StylinComponentProps, FormElementProps {
}
