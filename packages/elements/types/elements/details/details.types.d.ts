import { StylinComponentProps } from '@stylin.js/react';
import { DialogHTMLAttributes } from 'react';
export type DetailsElementProps = Omit<DialogHTMLAttributes<HTMLDetailsElement>, 'color' | 'translate'>;
export interface DetailsProps extends StylinComponentProps, DetailsElementProps {
}
