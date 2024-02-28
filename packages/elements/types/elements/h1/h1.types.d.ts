import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type H1ElementProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'color' | 'translate'>;
export interface H1Props extends StylinComponentProps, H1ElementProps {
}
