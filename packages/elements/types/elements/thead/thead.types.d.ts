import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type TheadElementProps = Omit<HTMLAttributes<HTMLTableSectionElement>, 'color' | 'translate'>;
export interface TheadProps extends StylinComponentProps, TheadElementProps {
}
