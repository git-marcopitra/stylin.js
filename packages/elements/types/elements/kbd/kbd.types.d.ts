import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type KbdElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface KbdProps extends StylinComponentProps, KbdElementProps {
}
