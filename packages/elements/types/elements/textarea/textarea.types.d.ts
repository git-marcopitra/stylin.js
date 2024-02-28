import { StylinComponentProps } from '@stylin.js/react';
import { TextareaHTMLAttributes } from 'react';
export type TextareaElementProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color' | 'translate'>;
export interface TextareaProps extends StylinComponentProps, TextareaElementProps {
}
