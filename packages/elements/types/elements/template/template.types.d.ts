import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type TemplateElementProps = Omit<HTMLAttributes<HTMLTemplateElement>, 'color' | 'translate'>;
export interface TemplateProps extends StylinComponentProps, TemplateElementProps {
}
