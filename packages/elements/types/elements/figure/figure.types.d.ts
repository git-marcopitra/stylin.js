import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type FigureElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface FigureProps extends StylinComponentProps, FigureElementProps {
}
