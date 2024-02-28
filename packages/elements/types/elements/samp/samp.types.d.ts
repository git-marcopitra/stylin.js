import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type SampElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface SampProps extends StylinComponentProps, SampElementProps {
}
