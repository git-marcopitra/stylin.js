import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type DtElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface DtProps extends StylinComponentProps, DtElementProps {
}
