import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type TfootElementProps = Omit<HTMLAttributes<HTMLTableSectionElement>, 'color' | 'translate'>;
export interface TfootProps extends StylinComponentProps, TfootElementProps {
}
