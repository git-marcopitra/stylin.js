import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type RpElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface RpProps extends StylinComponentProps, RpElementProps {
}
