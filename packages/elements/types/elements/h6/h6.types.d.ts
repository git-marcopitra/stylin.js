import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type H6ElementProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'color' | 'translate'>;
export interface H6Props extends StylinComponentProps, H6ElementProps {
}
