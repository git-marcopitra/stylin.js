import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type NavElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface NavProps extends StylinComponentProps, NavElementProps {
}
