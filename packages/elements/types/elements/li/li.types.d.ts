import { StylinComponentProps } from '@stylin.js/react';
import { LiHTMLAttributes } from 'react';
export type LiElementProps = Omit<LiHTMLAttributes<HTMLLIElement>, 'color' | 'translate'>;
export interface LiProps extends StylinComponentProps, LiElementProps {
}
