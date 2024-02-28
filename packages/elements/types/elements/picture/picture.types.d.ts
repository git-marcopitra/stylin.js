import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';
export type PictureElementProps = Omit<HTMLAttributes<HTMLPictureElement>, 'color' | 'translate'>;
export interface PictureProps extends StylinComponentProps, PictureElementProps {
}
