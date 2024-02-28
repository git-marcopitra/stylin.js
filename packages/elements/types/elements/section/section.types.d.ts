import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type SectionElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface SectionProps extends StylinComponentProps, SectionElementProps {
}
