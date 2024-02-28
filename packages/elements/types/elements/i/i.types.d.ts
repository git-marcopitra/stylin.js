import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type IElementProps = Omit<HTMLAttributes<HTMLElement>, 'color' | 'translate'>;
export interface IProps extends StylinComponentProps, IElementProps {
}
