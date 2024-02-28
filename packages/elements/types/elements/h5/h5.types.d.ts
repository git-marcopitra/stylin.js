import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type H5ElementProps = Omit<HTMLAttributes<HTMLHeadingElement>, 'color' | 'translate'>;
export interface H5Props extends StylinComponentProps, H5ElementProps {
}
